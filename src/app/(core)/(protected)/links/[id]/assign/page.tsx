"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/endpoint-builder";
import { ApiResponse, LinkWithAssignedUsers, UserAssigned } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EmptyState from "@/components/EmptyState";

type PendingOperation = {
    userId: number;
    type: 'assign' | 'unassign';
};

const AssignLinkPage = () => {
    const { id: strId } = useParams();
    const id = Number(strId);
    const [link, setLink] = useState<LinkWithAssignedUsers | null>(null);
    const [users, setUsers] = useState<UserAssigned[]>([]);
    const [nameFilter, setNameFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [pendingOperations, setPendingOperations] = useState<PendingOperation[]>([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const [linkRes, usersRes] = await Promise.all([
                    fetch(api.links.byId(id).get.path),
                    fetch(api.users.get.path)
                ]);

                if (!isMounted) return;

                const linkData: ApiResponse = await linkRes.json();
                const usersData: ApiResponse = await usersRes.json();

                if (linkData.success) setLink(linkData.data);
                if (usersData.success) setUsers(usersData.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();
        return () => { isMounted = false };
    }, [id]);

    const handleAssignment = async (userId: number, assign: boolean) => {
        const operationType = assign ? 'assign' : 'unassign';

        try {
            setPendingOperations(prev => [...prev, { userId, type: operationType }]);

            // Optimistic update
            setLink(prev => {
                if (!prev) return prev;

                if (assign) {
                    const userToAdd = users.find(u => u.id === userId);
                    return userToAdd ? {
                        ...prev,
                        assignedUsers: [...prev.assignedUsers, userToAdd]
                    } : prev;
                } else {
                    return {
                        ...prev,
                        assignedUsers: prev.assignedUsers.filter(u => u.id !== userId)
                    };
                }
            });

            let response: Response;

            if (assign) {
                response = await fetch(api.assignments.post.path, {
                    method: api.assignments.post.method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ linkId: id, userIds: [userId] })
                });
            } else {
                const endpoint = api.assignments.byIds({ linkId: id, userId }).delete;
                response = await fetch(endpoint.path, {
                    method: endpoint.method,
                    headers: { 'Content-Type': 'application/json' },
                });
            }

            const data: ApiResponse = await response.json();

            if (!data.success) {
                throw new Error(data.message || 'Operation failed');
            }
        } catch (error) {
            console.error("Error updating assignment:", error);
            // Rollback
            setLink(prev => {
                if (!prev) return prev;
                return assign ? {
                    ...prev,
                    assignedUsers: prev.assignedUsers.filter(u => u.id !== userId)
                } : {
                    ...prev,
                    assignedUsers: [...prev.assignedUsers, users.find(u => u.id === userId)!]
                };
            });
        } finally {
            setPendingOperations(prev =>
                prev.filter(op => op.userId !== userId || op.type !== operationType)
            );
        }
    };

    const isOperationPending = (userId: number, type: 'assign' | 'unassign') => {
        return pendingOperations.some(op =>
            op.userId === userId && op.type === type
        );
    };

    const getFilteredUsers = () => {
        if (!link) return [];
        return users.filter(user =>
            user.username.toLowerCase().includes(nameFilter.toLowerCase()) &&
            !link.assignedUsers.some(au => au.id === user.id) &&
            !isOperationPending(user.id, 'assign')
        );
    };

    const getAssignedUsers = () => {
        if (!link) return [];
        return link.assignedUsers.filter(au =>
            !isOperationPending(au.id, 'unassign')
        );
    };

    if (loading) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-8 w-1/3" />
                <div className="grid md:grid-cols-2 gap-6">
                    {[...Array(2)].map((_, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <Skeleton className="h-6 w-1/4" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[...Array(3)].map((_, j) => (
                                    <Skeleton key={j} className="h-16 rounded-lg" />
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    return link && (
        <div className="space-y-6">
            <div className="flex justify-between items-center px-2 md:px-10">
                <h1 className="text-2xl font-bold tracking-tight">{link.name}</h1>
                <Badge variant="outline" className="px-3 py-1">
                    {getAssignedUsers().length} assigned
                </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Assigned Users Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Assigned Users</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {getAssignedUsers().length === 0 ? (
                            <EmptyState />
                        ) : (
                            getAssignedUsers().map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="font-medium">{user.username}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleAssignment(user.id, false)}
                                        disabled={isOperationPending(user.id, 'unassign')}
                                    >
                                        {isOperationPending(user.id, 'unassign') ? 'Removing...' : 'Unassign'}
                                    </Button>
                                </div>
                            ))
                        )}
                    </CardContent>
                </Card>

                {/* Available Users Card */}
                <Card>
                    <CardHeader>
                        <div className="space-y-4">
                            <CardTitle className="text-lg">Available Users</CardTitle>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search users..."
                                    className="pl-9"
                                    value={nameFilter}
                                    onChange={(e) => setNameFilter(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {getFilteredUsers().length === 0 ? (
                            <EmptyState />
                        ) : (
                            getFilteredUsers().map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="font-medium">{user.username}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="default"
                                        size="sm"
                                        onClick={() => handleAssignment(user.id, true)}
                                        disabled={isOperationPending(user.id, 'assign')}
                                    >
                                        {isOperationPending(user.id, 'assign') ? 'Assigning...' : 'Assign'}
                                    </Button>
                                </div>
                            ))
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AssignLinkPage;