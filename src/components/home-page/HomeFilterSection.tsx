"use client";

import { Calendar, Globe, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useHome } from "@/hooks/use-home";

const HomeFilterSection = () => {
    const {
        nameFilter,
        setNameFilter,
        dateFilter,
        setDateFilter,
        domainFilter,
        setDomainFilter,
        linksWithTld,
        clearAllFilters
    } = useHome();

    // Function to get a color for TLD badges based on TLD
    const getTldColor = (tld: string) => {
        const colors: Record<string, string> = {
            "com": "bg-[oklch(0.39_0.07_290/0.2)]",
            "org": "bg-[oklch(0.30_0.07_270/0.2)]",
            "net": "bg-[oklch(0.32_0.07_195/0.2)]",
            "io": "bg-[oklch(0.32_0.08_150/0.2)]",
            "dev": "bg-[oklch(0.30_0.08_90/0.2)]",
            "app": "bg-[oklch(0.30_0.08_35/0.2)]",
        };
        return colors[tld] || "bg-[oklch(0.26_0.04_245/0.3)]";
    };

    // Get unique TLDs for the domain filter
    const uniqueTlds = Array.from(new Set(linksWithTld.map(link => link.tld).filter(Boolean)));

    return (
        <div className="mb-6 flex flex-col md:flex-row gap-4">
            {/* Search Filter */}
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chart-2" size={18} />
                <Input
                    className="pl-10 focus-within:ring-ring focus-within:border-rinring-ring text-foreground"
                    placeholder="Search by name..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />
            </div>

            {/* Date Filter */}
            <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full md:w-40 text-foreground hover:!bg-muted cursor-pointer border-accent hover:border-ring">
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-chart-2" />
                        <SelectValue placeholder="Date" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This week</SelectItem>
                    <SelectItem value="month">This month</SelectItem>
                </SelectContent>
            </Select>

            {/* Domain (TLD) Filter */}
            <Select value={domainFilter} onValueChange={setDomainFilter}>
                <SelectTrigger className="w-full md:w-48 text-foreground hover:!bg-muted cursor-pointer border-accent hover:border-ring">
                    <div className="flex items-center gap-2">
                        <Globe size={18} className="text-chart-2" />
                        <SelectValue placeholder="Domain" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All TLDs</SelectItem>
                    {uniqueTlds.map(tld => (
                        <SelectItem key={tld} value={tld}>
                            <span className={`inline-flex px-1.5 py-0.5 rounded-md text-xs ${getTldColor(tld)}`}>.{tld}</span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Clear Filters Button - only show if there are active filters */}
            {(nameFilter || dateFilter !== "all" || domainFilter !== "all") && (
                <Button
                    variant="outline"
                    className="flex items-center gap-1 text-foreground !border-accent hover:!bg-muted hover:!border-ring hover:text-foreground"
                    onClick={clearAllFilters}
                >
                    <X size={16} />
                    Clear filters
                </Button>
            )}
        </div>
    );
}

export default HomeFilterSection;