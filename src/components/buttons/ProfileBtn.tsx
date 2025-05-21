"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import { ApiResponse } from "@/types";
import { api } from "@/lib/endpoint-builder";
import { useRouter } from "next/navigation";

const ProfileBtn = () => {
    const { currentUser: user, isPending } = useAuth();
    const router = useRouter();

    async function handleLogout () {
        const res: ApiResponse = await fetch(api.sessions.delete.path, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());

        if (res.success) {
            router.push("/login");
        } else {
            console.error(res.message);
        }
    };

    return isPending ? (
        <Skeleton className="h-9 px-8 py-2 rounded-md w-[130px]" />
    ) : (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="flex justify-center items-center gap-2 px-8 py-2 rounded-md bg-muted text-sm 
                     hover:bg-muted/50 transition-colors border border-border cursor-pointer focus:outline-none"
                >
                    <span className="text-foreground truncate max-w-[120px] font-bold">
                        {user?.username}
                    </span>
                    <ChevronDown className="size-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                {/* Other items */}

                {/* Logout button */}
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer hover:!bg-destructive-background"
                >
                    <LogOut className="mr-2 h-4 w-4 text-destructive" />
                    <p className="text-destructive">Logout</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileBtn;
