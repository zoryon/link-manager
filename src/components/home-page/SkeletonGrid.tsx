"use client";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-3">
            {[...Array(8)].map((_, index) => (
                <Skeleton
                    key={index}
                    className="bg-card overflow-hidden h-[130px] w-full rounded-lg border border-accent/90"
                >
                    <div className="p-4 space-y-4">
                        {/* Skeleton Header */}
                        <div className="flex justify-between items-start">
                            <Skeleton className="h-6 w-3/4 bg-muted-foreground/20" />
                            <Skeleton className="h-8 w-8 rounded-full bg-muted-foreground/20" />
                        </div>

                        {/* Skeleton Main */}
                        <div className="space-y-2">
                            {/* First row */}
                            <div className="flex items-center gap-1">
                                <Skeleton className="h-4 w-4 bg-muted-foreground/20" />
                                <Skeleton className="h-4 w-1/2 bg-muted-foreground/20" />
                            </div>
                        </div>

                        {/* Skeleton footer */}
                        <div className="flex items-center">
                            <Skeleton className="h-4 w-20 bg-muted-foreground/20" />
                        </div>
                    </div>
                </Skeleton>
            ))}
        </div>
    );
}

export default SkeletonGrid;