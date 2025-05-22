"use client";

import React, { useState, useMemo } from "react";
import { PublicUser } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinkCard from "@/components/home-page/LinkCard";
import EmptyState from "@/components/EmptyState";
import Grid from "@/components/Grid";
import { Input } from "@/components/ui/input"; 
import { Search } from "lucide-react";

const AssignedLinksList = ({
    links,
    onRevoke,
}: {
    links: PublicUser["links"];
    onRevoke: (linkId: number) => void;
}) => {
    const [nameFilter, setNameFilter] = useState("");

    const filteredLinks = useMemo(() => {
        if (!nameFilter) return links;
        return links.filter((link) =>
            link.name?.toLowerCase().includes(nameFilter.toLowerCase())
        );
    }, [links, nameFilter]);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Assigned Links</CardTitle>
                <p className="text-sm text-gray-500">Manage user's link permissions</p>
                <div className="mt-3">
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
            </CardHeader>
            <CardContent>
                {filteredLinks.length === 0 ? (
                    <EmptyState use="home" />
                ) : (
                    <Grid
                        data={filteredLinks}
                        component={({ data }) => <LinkCard link={data} onRevoke={onRevoke} />}
                        emptyMessage="No link found"
                        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        gapClass="gap-2 xl:gap-3"
                        keyProp="id"
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default AssignedLinksList;