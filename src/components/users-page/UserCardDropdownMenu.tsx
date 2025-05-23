"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { useUsers } from "@/hooks/use-users";
import { api } from "@/lib/endpoint-builder";
import { ApiResponse, PublicUser } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";

const UserCardDropdownMenu = ({ user }: { user: PublicUser }) => {
    const { currentUser, isPending } = useAuth();
    const { setUsers } = useUsers();
    const router = useRouter();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

    async function deleteUser() {
        // Optimistically remove the user from UI
        setUsers(prev => prev.filter(l => l.id !== user.id));

        try {
            const res: ApiResponse = await fetch(api.users.byId(user.id).delete.path, {
                method: api.users.byId(user.id).delete.method,
            }).then(res => res.json());

            if (!res.success) {
                // Revert deletion if failed
                setUsers(prev => [...prev, user]);
                console.error("Delete failed:", res.message);
            }
        } catch (error) {
            // Revert deletion on error
            setUsers(prev => [...prev, user]);
            console.error("Error deleting user:", error);
        }
    }

    return (
        <>
            {!isPending && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:!bg-accent hover:text-chart-2"
                        >
                            <span className="sr-only">Open menu</span>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                            >
                                <path
                                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-accent/50">
                        <DropdownMenuItem
                            onClick={() => router.push(`/users/${user.id}/edit`)}
                            className="hover:!bg-accent hover:text-chart-2 cursor-pointer"
                        >
                            Assignments
                        </DropdownMenuItem>
                        {user.id !== currentUser?.id && (
                            <DropdownMenuItem
                                onClick={() => setIsDeleteModalOpen(true)}
                                className="!text-destructive hover:!bg-destructive-background cursor-pointer"
                            >
                                Delete
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}

            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={deleteUser}
                confirmText={user.username}
                title="Confirm User Deletion"
                description={`This action cannot be undone. Please type "${user.username}" to confirm deletion.`}
            />
        </>
    );
};

export default UserCardDropdownMenu;
