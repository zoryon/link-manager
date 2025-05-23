"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { links } from "@/generated/prisma";
import { useAuth } from "@/hooks/use-auth";
import { useLinks } from "@/hooks/use-links";
import { api } from "@/lib/endpoint-builder";
import { ApiResponse } from "@/types";
import { useRouter } from "next/navigation";

const LinkCardDropdownMenu = ({ link, onRevoke }: { link: links, onRevoke?: (linkId: number) => void }) => {
    const { setLinks } = useLinks();
    const { isAdmin } = useAuth();
    const router = useRouter();

    async function deleteLink() {
        // Optimistically remove the link from UI
        setLinks(prev => prev.filter(l => l.id !== link.id));

        try {
            const res: ApiResponse = await fetch(api.links.byId(link.id).delete.path, {
                method: api.links.byId(link.id).delete.method,
            }).then(res => res.json());

            if (!res.success) {
                // Revert deletion if failed
                setLinks(prev => [...prev, link]);
                console.error("Delete failed:", res.message);
            }
        } catch (error) {
            // Revert deletion on error
            setLinks(prev => [...prev, link]);
            console.error("Error deleting link:", error);
        }
    }

    return (
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
                    onClick={() => navigator.clipboard.writeText(link.url)}
                    className="hover:!bg-accent hover:text-chart-2 cursor-pointer"
                >
                    Copy URL
                </DropdownMenuItem>
                {isAdmin() && (
                    <>
                        <DropdownMenuItem
                            onClick={() => router.push(`/links/${link.id}/assign`)}
                            className="hover:!bg-accent hover:text-chart-2 cursor-pointer"
                        >
                            Assignments
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => onRevoke ? onRevoke(link.id) : deleteLink()}
                            className="!text-destructive hover:!bg-destructive-background cursor-pointer"
                        >
                            {onRevoke ? "Revoke" : "Delete"}
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LinkCardDropdownMenu;
