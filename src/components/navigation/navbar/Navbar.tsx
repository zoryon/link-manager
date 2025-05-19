"use client";

import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { NavbarItem } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const primaryColor = "from-blue-600 to-purple-600";

    return (
        <>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center h-16 px-6 border-b backdrop-blur-sm">
                <Link href="/" className="mr-8">
                    <h1 className={`text-xl font-bold bg-gradient-to-r ${primaryColor} bg-clip-text text-transparent`}>
                        LinkHub
                    </h1>
                </Link>

                <div className="flex-1 flex items-center gap-2">
                    {NAVBAR_ITEMS.map((item: NavbarItem) => (
                        <Button
                            key={item.name}
                            asChild
                            variant="ghost"
                            className={cn(
                                "h-10 rounded-lg px-4 font-medium text-gray-600",
                                "hover:bg-gray-50 hover:text-gray-900",
                                "data-[active=true]:bg-gradient-to-r data-[active=true]:from-blue-50 data-[active=true]:to-purple-50",
                                "data-[active=true]:text-gray-900"
                            )}
                        >
                            <Link href={item.href}>
                                <i className={cn(
                                    "w-4 h-4 mr-2",
                                    item.icon
                                )} />
                                {item.name}
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        JD
                    </div>
                </div>
            </nav>

            {/* Mobile Nav */}
            <nav className="md:hidden flex items-center h-16 px-4 border-b backdrop-blur-sm sticky top-0 z-50">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="mr-2 flex justify-center items-center"
                >
                    <i className={cn(
                        "h-5 w-5 mt-1.5",
                        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                    )} />
                </Button>

                <Link href="/" className="flex-1">
                    <h1 className={`text-xl font-bold bg-gradient-to-r ${primaryColor} bg-clip-text text-transparent`}>
                        LinkHub
                    </h1>
                </Link>

                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    JD
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg"
                    >
                        <div className="p-4 space-y-2">
                            {NAVBAR_ITEMS.map((item: NavbarItem) => (
                                <Button
                                    key={item.name}
                                    asChild
                                    variant="ghost"
                                    className="w-full justify-start h-12 rounded-lg px-4 text-gray-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href={item.href}>
                                        <i className={cn(
                                            "w-5 h-5 mr-3",
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