"use client";

import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { NavbarItem } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";
import ProfileBtn from "@/components/buttons/ProfileBtn";

const Navbar = () => {
    const { isPending, isAdmin } = useAuth();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const primaryGradient = "from-[oklch(0.67_0.20_195)] to-[oklch(0.62_0.22_270)]";

    return (
        <>
            {/* Desktop Nav */}
            <nav className="hidden md:flex w-full items-center h-16 px-6 border-b border-border backdrop-blur-sm bg-background/90 fixed top-0 left-0 z-50">
                <Link href="/" className="mr-8">
                    <h1 className={`text-xl font-bold bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}>
                        LinkHub
                    </h1>
                </Link>

                <div className="flex-1 flex items-center gap-2">
                    {
                        isPending ? (
                            <div className="flex items-center gap-3 pl-5">
                                <Skeleton className="h-6 w-[100px]" />
                                <Skeleton className="h-6 w-[100px]" />
                                <Skeleton className="h-6 w-[100px]" />
                            </div>
                        ) : (
                            NAVBAR_ITEMS.map((item: NavbarItem) => {
                                if (!isAdmin() && item.isAdminOnly) {
                                    return null;
                                }
                                return (
                                    <Button
                                        key={item.name}
                                        asChild
                                        variant="ghost"
                                        className={cn(
                                            "h-10 rounded-lg px-4 font-medium !text-trivial",
                                            "hover:!bg-bg-muted hover:text-foreground",
                                            "data-[active=true]:!bg-gradient-to-r data-[active=true]:!from-chart-3/15 data-[active=true]:!to-chart-2/15",
                                            "data-[active=true]:!text-trivial"
                                        )}
                                    >
                                        <Link href={item.href}>
                                            <i className={cn(
                                                "w-4 h-4 mr-2 text-chart-2/15",
                                                item.icon
                                            )} />
                                            {item.name}
                                        </Link>
                                    </Button>
                                )
                            })
                        )
                    }
                </div>

                <ProfileBtn />
            </nav>

            {/* Mobile Nav */}
            <nav className="md:hidden w-full flex items-center h-16 px-4 border-b border-border backdrop-blur-sm fixed top-0 z-50 bg-background/90">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="mr-2 flex justify-center items-center text-chart-2/15 hover:!bg-bg-muted hover:text-chart-3"
                >
                    <i className={cn(
                        "h-5 w-5 mt-1.5",
                        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                    )} />
                </Button>

                <Link href="/" className="flex-1">
                    <h1 className={`text-xl font-bold bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}>
                        LinkHub
                    </h1>
                </Link>

                <ProfileBtn />

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-16 left-0 right-0 bg-[oklch(0.19_0.03_245)] border-b border-muted shadow-lg shadow-black/30"
                    >
                        <div className="p-4 space-y-2">
                            {NAVBAR_ITEMS.map((item: NavbarItem) => (
                                <Button
                                    key={item.name}
                                    asChild
                                    variant="ghost"
                                    className="w-full justify-start h-12 rounded-lg px-4 !text-trivial hover:!bg-bg-muted hover:text-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href={item.href}>
                                        <i className={cn(
                                            "w-5 h-5 mr-3 text-chart-2/15",
                                            item.icon
                                        )} />
                                        {item.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
}

export default Navbar;