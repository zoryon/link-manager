"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LinksGridSkeleton = ({ count = 8 }: { count?: number }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="p-6 h-36 flex flex-col justify-between rounded-md border border-ring/20 bg-gradient-to-br from-[#141531] via-[#291b44] to-[#230f2c] backdrop-blur-lg relative overflow-hidden"
                >
                    <Skeleton className="w-2/3 h-6 mb-2" />
                    <Skeleton className="w-5/6 h-4 mb-4" />
                    <div className="flex items-center justify-end mt-2">
                        <Skeleton className="w-16 h-8 rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LinksGridSkeleton;