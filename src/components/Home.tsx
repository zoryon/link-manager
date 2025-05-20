"use client";

import React, { useState, useEffect } from 'react';
import { Search, Calendar, Globe, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { links as linksType } from '@/generated/prisma';
import { ApiResponse } from '@/types';
import { api } from '@/lib/endpoint-builder';
import CustomTooltip from './CustomTooltip';
import { useAuth } from '@/hooks/use-auth';
import LoadingScreen from './loaders/LoadingScreen';
import LoadingSpinner from './loaders/LoadingSpinner';

// Helper to extract TLD (final domain part) from a URL
const getTldFromUrl = (url: string) => {
    try {
        const host = new URL(url).hostname;
        const parts = host.split('.');
        if (parts.length < 2) return host;
        // Take the last part: com, org, it, etc.
        return parts[parts.length - 1];
    } catch {
        return '';
    }
};

// Helper function to format time distance
const formatTimeDistance = (dateString: any) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return 'just now';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};

// Helper function to get query parameters from URL
const getQueryParams = () => {
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name') || '',
        date: params.get('date') || '',
        domain: params.get('domain') || '',
    };
};

// Helper function to update URL with filters
const updateUrlWithFilters = (filters: any) => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams();

    if (filters.name) params.set('name', filters.name);
    if (filters.date && filters.date !== 'all') params.set('date', filters.date);
    if (filters.domain && filters.domain !== 'all') params.set('domain', filters.domain);

    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.pushState({}, '', newUrl);
};

const HomePage = () => {
    const urlParams = getQueryParams();
    const { isAdmin } = useAuth();

    const [isPending, setIsPending] = useState<boolean>(true);
    const [links, setLinks] = useState<Array<linksType>>([]);

    // Get filters from URL or use defaults
    const [nameFilter, setNameFilter] = useState(urlParams.name || '');
    const [dateFilter, setDateFilter] = useState(urlParams.date || 'all');
    const [domainFilter, setDomainFilter] = useState(urlParams.domain || 'all');

    useEffect(() => {
        async function fetchLinks() {
            setIsPending(true);
            const res: ApiResponse = await fetch(api.links.get.path, {
                method: "GET",
            }).then(res => res.json());

            if (res.success) {
                setLinks(res.data);
            } else {
                console.error(res.message);
            }
            setIsPending(false);
        }
        fetchLinks();
    }, []);

    // Update URL when filters change
    useEffect(() => {
        updateUrlWithFilters({
            name: nameFilter,
            date: dateFilter,
            domain: domainFilter
        });
    }, [nameFilter, dateFilter, domainFilter]);

    // Handle URL changes (like browser back/forward buttons)
    useEffect(() => {
        const handlePopState = () => {
            const params = getQueryParams();
            setNameFilter(params.name || '');
            setDateFilter(params.date || 'all');
            setDomainFilter(params.domain || 'all');
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Get TLD for each link and memoize it
    const linksWithTld = links.map(link => ({
        ...link,
        tld: link.url ? getTldFromUrl(link.url) : ''
    }));

    // Get unique TLDs for the domain filter
    const uniqueTlds = Array.from(new Set(linksWithTld.map(link => link.tld).filter(Boolean)));

    // Filter links based on current filter state
    const filteredLinks = linksWithTld.filter(link => {
        const matchesName = link.name?.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesDomain = domainFilter === 'all' ? true : link.tld === domainFilter;

        let matchesDate = true;
        if (dateFilter && dateFilter !== 'all') {
            const linkDate = new Date(link.createdAt!);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (dateFilter === 'today') {
                const linkDay = new Date(linkDate);
                linkDay.setHours(0, 0, 0, 0);
                matchesDate = linkDay.getTime() === today.getTime();
            } else if (dateFilter === 'week') {
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                matchesDate = linkDate >= weekAgo;
            } else if (dateFilter === 'month') {
                const monthAgo = new Date();
                monthAgo.setMonth(monthAgo.getMonth() - 1);
                matchesDate = linkDate >= monthAgo;
            }
        }

        return matchesName && matchesDomain && matchesDate;
    });

    // Clear all filters
    const clearAllFilters = () => {
        setNameFilter('');
        setDateFilter('all');
        setDomainFilter('all');
    };

    // Function to get a color for TLD badges based on TLD
    const getTldColor = (tld: string) => {
        const colors: Record<string, string> = {
            'com': 'bg-[oklch(0.39_0.07_290/0.2)]',
            'org': 'bg-[oklch(0.30_0.07_270/0.2)]',
            'net': 'bg-[oklch(0.32_0.07_195/0.2)]',
            'io': 'bg-[oklch(0.32_0.08_150/0.2)]',
            'dev': 'bg-[oklch(0.30_0.08_90/0.2)]',
            'app': 'bg-[oklch(0.30_0.08_35/0.2)]',
        };
        return colors[tld] || 'bg-[oklch(0.26_0.04_245/0.3)]';
    };

    return (
        <div className="min-h-[88vh]">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                <div className="w-full flex items-center justify-between">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">My Links</h2>
                        <p className="text-trivial">Manage and organize your assigned links</p>
                    </div>
                    {isAdmin() && (
                        <Button
                            variant={"default"}
                            onClick={() => window.location.href = "/links/create"}
                            className="font-bold"
                        >
                            New link
                        </Button>
                    )}
                </div>

                {/* Filters Section */}
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
                    {(nameFilter || dateFilter !== 'all' || domainFilter !== 'all') && (
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

                {/* Active Filters Display */}
                {(nameFilter || dateFilter !== 'all' || domainFilter !== 'all') && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {nameFilter && (
                            <Badge variant="outline" className="flex items-center gap-1 text-sm border-chart-2/22 bg-muted text-foreground">
                                Name: {nameFilter}
                                <button onClick={() => setNameFilter('')} className="ml-1 hover:!text-chart-3 cursor-pointer">
                                    <X size={14} />
                                </button>
                            </Badge>
                        )}
                        {dateFilter !== 'all' && (
                            <Badge variant="outline" className="flex items-center gap-1 text-sm border-[oklch(0.62_0.22_270/0.3)] bg-[oklch(0.62_0.22_270/0.1)] text-foreground">
                                Date: {dateFilter === 'today' ? 'Today' : dateFilter === 'week' ? 'This week' : 'This month'}
                                <button onClick={() => setDateFilter('all')} className="ml-1 hover:!text-chart-3 cursor-pointer">
                                    <X size={14} />
                                </button>
                            </Badge>
                        )}
                        {domainFilter !== 'all' && (
                            <Badge variant="outline" className="flex items-center gap-1 text-sm border-[oklch(0.72_0.22_150/0.3)] bg-[oklch(0.72_0.22_150/0.1)] text-foreground">
                                Domain: .{domainFilter}
                                <button onClick={() => setDomainFilter('all')} className="ml-1 hover:!text-chart-3 cursor-pointer">
                                    <X size={14} />
                                </button>
                            </Badge>
                        )}
                    </div>
                )}

                {/* Results Count */}
                <p className="text-sm md:text-base mb-4 text-trivial">
                    Showing {filteredLinks.length} of {links.length} links
                </p>

                {/* Loading State */}
                {isPending ? (
                    <div className="w-full flex items-center justify-center h-64">
                        <LoadingSpinner />
                    </div>
                ) :
                    // Empty state
                    filteredLinks.length === 0 ? (
                        <div className="mt-6 text-center p-12 border border-dashed rounded-lg border-accent/50 bg-muted/22 text-foreground">
                            <div className="flex justify-center mb-4">
                                <Search className="h-12 w-12 text-chart-2" />
                            </div>
                            <h3 className="text-lg font-medium text-foreground">No links found</h3>
                            <p className="text-trivial mt-1">Try adjusting your search or filters</p>
                            <Button
                                variant="outline"
                                className="mt-4 border-chart-2/22 text-foreground hover:bg-muted hover:text-foreground"
                                onClick={clearAllFilters}
                            >
                                Clear all filters
                            </Button>
                        </div>
                    ) : (
                        // Links Grid
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-3">
                            {filteredLinks.map(link => (
                                <Card key={link.id} className="bg-card overflow-hidden hover:shadow-[0_4px_20px_oklch(0.19_0.03_245/0.5)] transition-shadow duration-200 px-0 py-4 border border-accent/90">
                                    <CardHeader className="-mb-3">
                                        <div className="flex justify-between items-start">
                                            <CardTitle>
                                                <CustomTooltip text={link.name} className="text-base xl:text-lg focus:outline-none text-foreground" />
                                            </CardTitle>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:!bg-accent hover:text-chart-2">
                                                        <span className="sr-only">Open menu</span>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                                            <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                        </svg>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="bg-card border-accent/50">
                                                    <DropdownMenuItem
                                                        className="hover:!bg-accent hover:text-chart-2 cursor-pointer"
                                                        onClick={() => navigator.clipboard.writeText(link.url)}
                                                    >
                                                        Copy URL
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:!bg-accent hover:text-chart-2 cursor-pointer" disabled>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem className="!text-destructive hover:!bg-destructive-background cursor-pointer" disabled>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <CardDescription className="flex items-center gap-1 text-sm truncate mt-2">
                                            <Globe size={12} className="text-chart-2" />
                                            <CustomTooltip text={link.url} className="text-xs xl:text-sm focus:outline-none text-trivial" />
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter className="pt-0 flex justify-between text-xs text-trivial">
                                        <div className="flex items-center">
                                            <Calendar size={12} className="mr-1 text-chart-1" />
                                            {formatTimeDistance(link.createdAt)}
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
            </main>
        </div>
    );
};

export default HomePage;