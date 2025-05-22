"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";

const HomeHeader = () => {
    const { isAdmin, isPending } = useAuth();

    return (
        <div className="w-full flex items-center justify-between">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground">My Links</h2>
                <p className="text-trivial">Manage and organize your assigned links</p>
            </div>
            {isPending ? (
                <Skeleton className="h-9 w-[90px]" />
            ) : isAdmin() && (
                <Button
                    variant={"default"}
                    onClick={() => window.location.href = "/links/create"}
                    className="font-bold"
                >
                    New link
                </Button>
            )}
        </div>
    );
}

export default HomeHeader;