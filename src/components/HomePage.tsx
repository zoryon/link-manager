"use client";

import React, { useState, useMemo, useEffect } from "react";
import { links as LinkType } from "@/generated/prisma";
import { ApiResponse } from "@/types";
import { api } from "@/lib/endpoint-builder";
import { useRouter, useSearchParams } from "next/navigation";
import { getDomain } from "@/components/links/LinkCard";
import LinkHeader from "@/components/links/LinkHeader";
import LinksFilters from "@/components/links/LinksFilters";
import LinksGrid from "@/components/links/LinksGrid";
import LinksGridSkeleton from "@/components/links/LinksGridSkeleton";

const HomePage = () => {
    const [links, setLinks] = useState<Array<LinkType>>([]);
    const [pending, setPending] = useState<boolean>(true);
    const [showTooltip, setShowTooltip] = useState<number | null>(null);
    const [search, setSearch] = useState<string>("");
    const [domain, setDomain] = useState<string>("");
    const [createdFrom, setCreatedFrom] = useState<string>("");
    const [createdTo, setCreatedTo] = useState<string>("");
    const [updatedFrom, setUpdatedFrom] = useState<string>("");
    const [updatedTo, setUpdatedTo] = useState<string>("");

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function fetchLinks() {
            setPending(true);
            const res: ApiResponse = await fetch(api.links.get.path, {
                method: "GET"
            }).then(res => res.json());
            if (res.success) {
                setLinks(res.data);
            } else {
                console.error(res.message);
            }
            setPending(false);
        }
        fetchLinks();
    }, []);

    // On mount: sync filters with URL
    useEffect(() => {
        setSearch(searchParams.get("search") ?? "");
        setDomain(searchParams.get("domain") ?? "");
        setCreatedFrom(searchParams.get("createdFrom") ?? "");
        setCreatedTo(searchParams.get("createdTo") ?? "");
        setUpdatedFrom(searchParams.get("updatedFrom") ?? "");
        setUpdatedTo(searchParams.get("updatedTo") ?? "");
    }, [searchParams]);

    // When filter changes: update URL
    useEffect(() => {
        const next = serializeFilter({
            search,
            domain,
            createdFrom,
            createdTo,
            updatedFrom,
            updatedTo,
        });
        router.replace(next ? `?${next}` : `?`, { scroll: false });
    }, [search, domain, createdFrom, createdTo, updatedFrom, updatedTo, router]);

    // Filtered domains for select dropdown
    const allDomains = useMemo(() => {
        return Array.from(new Set(links.map((l) => getDomain(l.url)))).sort();
    }, [links]);

    // JS filtering (no API calls)
    const filteredLinks = useMemo(() => {
        let filtered = links;
        const q = search.trim().toLowerCase();
        if (q) {
            filtered = filtered.filter(
                (link) =>
                    link.name.toLowerCase().includes(q) ||
                    link.url.toLowerCase().includes(q)
            );
        }
        if (domain) {
            filtered = filtered.filter((l) => getDomain(l.url) === domain);
        }
        if (createdFrom) {
            filtered = filtered.filter(
                (l) => new Date(l.createdAt!) >= new Date(createdFrom)
            );
        }
        if (createdTo) {
            filtered = filtered.filter(
                (l) => new Date(l.createdAt!) <= new Date(createdTo)
            );
        }
        if (updatedFrom) {
            filtered = filtered.filter(
                (l) => new Date(l.updatedAt!) >= new Date(updatedFrom)
            );
        }
        if (updatedTo) {
            filtered = filtered.filter(
                (l) => new Date(l.updatedAt!) <= new Date(updatedTo)
            );
        }
        return filtered;
    }, [links, search, domain, createdFrom, createdTo, updatedFrom, updatedTo]);

    const handleLinkInteraction = (idx: number) => {
        setShowTooltip((prev) => (prev === idx ? null : idx));
    };

    useEffect(() => {
        const handleBodyClick = (e: any) => {
            if (!e.target.closest(".hoverable-link")) setShowTooltip(null);
        };
        document.body.addEventListener("click", handleBodyClick);
        return () => {
            document.body.removeEventListener("click", handleBodyClick);
        };
    }, []);

    return (
        <div className="space-y-8 max-w-7xl mx-auto px-4 py-10 relative overflow-hidden">
            <LinkHeader />
            <LinksFilters
                search={search}
                setSearch={setSearch}
                domain={domain}
                setDomain={setDomain}
                allDomains={allDomains}
                createdFrom={createdFrom}
                setCreatedFrom={setCreatedFrom}
                createdTo={createdTo}
                setCreatedTo={setCreatedTo}
                updatedFrom={updatedFrom}
                setUpdatedFrom={setUpdatedFrom}
                updatedTo={updatedTo}
                setUpdatedTo={setUpdatedTo}
            />
            {pending ? (
                <LinksGridSkeleton />
            ) : (
                <LinksGrid
                    filteredLinks={filteredLinks}
                    showTooltip={showTooltip}
                    setShowTooltip={setShowTooltip}
                    handleLinkInteraction={handleLinkInteraction}
                />
            )}
        </div>
    );
}

function serializeFilter({ search, domain, createdFrom, createdTo, updatedFrom, updatedTo }: {
    search: string;
    domain: string;
    createdFrom: string;
    createdTo: string;
    updatedFrom: string;
    updatedTo: string;
}) {
    const url = new URLSearchParams();
    if (search) url.set("search", search);
    if (domain) url.set("domain", domain);
    if (createdFrom) url.set("createdFrom", createdFrom);
    if (createdTo) url.set("createdTo", createdTo);
    if (updatedFrom) url.set("updatedFrom", updatedFrom);
    if (updatedTo) url.set("updatedTo", updatedTo);
    return url.toString();
}

export default HomePage;