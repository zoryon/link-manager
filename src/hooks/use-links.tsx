"use client";

import { createContext, useContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from "react";
import { links as LinksType } from "@/generated/prisma";
import { ApiResponse, LinkWithTld } from "@/types";
import { api } from "@/lib/endpoint-builder";
import { getTldFromUrl } from "@/lib/utils";

type LinksContextType = {
    isPending: boolean;
    links: LinksType[];
    setLinks: Dispatch<SetStateAction<LinksType[]>>;
    nameFilter: string;
    setNameFilter: (value: string) => void;
    dateFilter: string;
    setDateFilter: (value: string) => void;
    domainFilter: string;
    setDomainFilter: (value: string) => void;
    filteredLinks: LinkWithTld[];
    linksWithTld: LinkWithTld[];
    clearAllFilters: () => void;
};

const LinksContext = createContext<LinksContextType | undefined>(undefined);

export function LinksProvider({ children }: { children: React.ReactNode }) {
    const [isPending, setIsPending] = useState(true);
    const [links, setLinks] = useState<LinksType[]>([]);
    const [nameFilter, setNameFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("all");
    const [domainFilter, setDomainFilter] = useState("all");

    // Memoize derived data
    const linksWithTld = useMemo(() =>
        links.map(link => ({
            ...link,
            tld: link.url ? getTldFromUrl(link.url) : ""
        })), [links]);

    const filteredLinks = useMemo(() =>
        linksWithTld.filter(link => {
            const matchesName = link.name?.toLowerCase().includes(nameFilter.toLowerCase());
            const matchesDomain = domainFilter === "all" ? true : link.tld === domainFilter;

            let matchesDate = true;
            if (dateFilter && dateFilter !== "all") {
                const linkDate = new Date(link.createdAt!);
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                if (dateFilter === "today") {
                    const linkDay = new Date(linkDate);
                    linkDay.setHours(0, 0, 0, 0);
                    matchesDate = linkDay.getTime() === today.getTime();
                } else if (dateFilter === "week") {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    matchesDate = linkDate >= weekAgo;
                } else if (dateFilter === "month") {
                    const monthAgo = new Date();
                    monthAgo.setMonth(monthAgo.getMonth() - 1);
                    matchesDate = linkDate >= monthAgo;
                }
            }

            return matchesName && matchesDomain && matchesDate;
        }
        ), [linksWithTld, nameFilter, domainFilter, dateFilter]);

    // Fetch links
    useEffect(() => {
        async function fetchLinks() {
            setIsPending(true);
            try {
                const res: ApiResponse = await fetch(api.links.get.path).then(res => res.json());
                if (res.success) setLinks(res.data);
                else console.error(res.message);
            } catch (error) {
                console.error("Fetch error: ", error);
            }
            setIsPending(false);
        }
        fetchLinks();
    }, []);

    function clearAllFilters() {
        setNameFilter("");
        setDateFilter("all");
        setDomainFilter("all");
    }

    const value = {
        isPending,
        links,
        setLinks,
        nameFilter,
        setNameFilter,
        dateFilter,
        setDateFilter,
        domainFilter,
        setDomainFilter,
        filteredLinks,
        linksWithTld,
        clearAllFilters
    };

    return <LinksContext.Provider value={value}>{children}</LinksContext.Provider>;
}

export function useLinks() {
    const context = useContext(LinksContext);
    if (context === undefined) {
        throw new Error("useLinks must be used within a LinkProvider");
    }
    return context;
}