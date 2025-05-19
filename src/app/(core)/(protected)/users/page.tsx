"use client";

import { api } from "@/lib/endpoint-builder";
import { ApiResponse, PublicUser } from "@/types";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const UsersPage = () => {
    const [users, setUsers] = useState<Array<PublicUser>>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res: ApiResponse = await fetch(api.users.get.path, {
                    method: "GET",
                }).then(res => res.json());

                if (res.success) {
                    setUsers(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user =>
        `${user.username} ${user.role}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-foreground">
                        Manage platform users and access levels
                    </p>
                </div>
                <Button
                    onClick={() => router.push("/users/create")}
                    className="gap-2 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90"
                >
                    <Plus className="w-4 h-4" />
                    Create New User
                </Button>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 py-5 rounded-xl bg-background/95 backdrop-blur"
                />
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-[150px] rounded-xl" />
                    ))}
                </div>
            ) : filteredUsers.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                    <p className="text-muted-foreground">No users found</p>
                    <p className="text-sm text-muted-foreground/60 mt-2">
                        Try adjusting your search terms
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                        <Card
                            key={user.id}
                            className="hover:shadow-lg transition-shadow duration-300 border border-muted/50"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={""} />
                                    <AvatarFallback className="bg-primary/10">
                                        {user.username[0].toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">{user.username}</h3>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Badge
                                        variant={user.role === "ADMIN" ? "default" : "secondary"}
                                        className={cn(
                                            user.role === "ADMIN" &&
                                            "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                                        )}
                                    >
                                        {user.role}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersPage;