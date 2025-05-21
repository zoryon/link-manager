"use client";

import { useHome } from "@/hooks/use-home";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import CustomTooltip from "../CustomTooltip";
import { Button } from "@/components/ui/button";
import { Calendar, Globe } from "lucide-react";
import { formatTimeDistance } from "@/lib/utils";

const LinksGrid = () => {
    const { filteredLinks } = useHome();

    return (
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
    );
}

export default LinksGrid;