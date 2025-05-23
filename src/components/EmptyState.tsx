"use client";

import { useLinks } from "@/hooks/use-links";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/hooks/use-users";

const EmptyState = ({ use = undefined }: { use?: "home" | "users" }) => {
    let clearAllFilters;

    if (use !== undefined) {

        switch (use) {
            case "home":
                clearAllFilters = useLinks().clearAllFilters;
                break;
            case "users":
                clearAllFilters = useUsers().clearAllFilters;
                break;
            default:
                return null;
        }
    }

    return (
        <div className="mt-6 text-center p-12 border border-dashed rounded-lg border-accent/50 bg-muted/22 text-foreground">
            <div className="flex justify-center mb-4">
                <Search className="h-12 w-12 text-chart-2" />
            </div>
            <h3 className="text-lg font-medium text-foreground">Nothing found</h3>
            <p className="text-trivial mt-1">Try adjusting your search or filters</p>
            {use !== undefined && (
                <Button
                    variant="outline"
                    className="mt-4 border-chart-2/22 text-foreground hover:bg-muted hover:text-foreground"
                    onClick={use !== undefined ? clearAllFilters : () => { }}
                >
                    Clear all filters
                </Button>
            )}
        </div>
    )
}

export default EmptyState;