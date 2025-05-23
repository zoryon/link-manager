"use client";

import { ApiResponse, PublicUser } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/endpoint-builder";
import UserDetailsCard from "@/components/users-page/UserDetailsCard";
import AssignedLinksList from "@/components/users-page/AssignedLinksList";

const EditUserPage = () => {
    const params = useParams();
    const [user, setUser] = useState<PublicUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const id = Number(params.id as string);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(api.users.byId(id).get.path, {
                    method: api.users.byId(id).get.method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch user");

                const res: ApiResponse = await response.json();

                if (res.success) {
                    setUser(res.data as PublicUser);
                } else {
                    setError(res.message || "Failed to load user data");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    async function handleRevokeLink(linkId: number) {
        if (!confirm("Are you sure you want to revoke this link?")) return;

        // Optimistic update
        const previousUser = user;
        setUser(prev => prev ? {
            ...prev,
            links: prev.links.filter(link => link.id !== linkId)
        } : null);

        try {
            const res: ApiResponse = await fetch(api.assignments.byIds({ linkId, userId: id }).delete.path, {
                method: api.assignments.byIds({ linkId, userId: id }).delete.method,
            }).then(res => res.json());

            if (!res.success) {
                // Rollback in case of failure
                setUser(previousUser);
                setError(res.message || "Failed to revoke link");
            }
        } catch (err: any) {
            // Rollback in case of unexpected error
            setUser(previousUser);
            setError(err.message || "Failed to revoke link");
        }
    };

    if (loading) return <LoadingSkeleton />;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
    if (!user) return <div className="p-4">User not found</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-screen mx-auto">
                <UserDetailsCard user={user} />
                <AssignedLinksList
                    links={user.links}
                    onRevoke={handleRevokeLink}
                />
            </div>
        </div>
    );
};

const LoadingSkeleton = () => (
    <div className="w-screen pt-10 flex flex-col items-center justify-center space-y-6">
        <Skeleton className="h-[200px] w-7xl" />
        <Skeleton className="h-[300px] w-7xl" />
    </div>
);

export default EditUserPage;