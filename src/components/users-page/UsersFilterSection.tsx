"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useUsers } from "@/hooks/use-users";

const UsersFilterSection = () => {
    const {
        nameFilter,
        setNameFilter,
    } = useUsers();

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
        </div>
    );
}

export default UsersFilterSection;