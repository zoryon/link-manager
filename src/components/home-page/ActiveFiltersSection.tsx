"use client";

import { useLinks } from "@/hooks/use-links";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";


const ActiveFiltersSection = () => {
    const {
        nameFilter,
        setNameFilter,
        dateFilter,
        setDateFilter,
        domainFilter,
        setDomainFilter
    } = useLinks();

    return (
        nameFilter || dateFilter !== "all" || domainFilter !== "all") && (
            <div className="mb-4 flex flex-wrap gap-2">
                {nameFilter && (
                    <Badge variant="outline" className="flex items-center gap-1 text-sm border-chart-2/22 bg-muted text-foreground">
                        Name: {nameFilter}
                        <button onClick={() => setNameFilter("")} className="ml-1 hover:!text-chart-3 cursor-pointer">
                            <X size={14} />
                        </button>
                    </Badge>
                )}
                {dateFilter !== "all" && (
                    <Badge variant="outline" className="flex items-center gap-1 text-sm border-[oklch(0.62_0.22_270/0.3)] bg-[oklch(0.62_0.22_270/0.1)] text-foreground">
                        Date: {dateFilter === "today" ? "Today" : dateFilter === "week" ? "This week" : "This month"}
                        <button onClick={() => setDateFilter("all")} className="ml-1 hover:!text-chart-3 cursor-pointer">
                            <X size={14} />
                        </button>
                    </Badge>
                )}
                {domainFilter !== "all" && (
                    <Badge variant="outline" className="flex items-center gap-1 text-sm border-[oklch(0.72_0.22_150/0.3)] bg-[oklch(0.72_0.22_150/0.1)] text-foreground">
                        Domain: .{domainFilter}
                        <button onClick={() => setDomainFilter("all")} className="ml-1 hover:!text-chart-3 cursor-pointer">
                            <X size={14} />
                        </button>
                    </Badge>
                )}
            </div>
        );
}

export default ActiveFiltersSection;