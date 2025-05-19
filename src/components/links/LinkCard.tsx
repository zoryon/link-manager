"use client";

import { motion } from "framer-motion";
import React from "react";
import { links as LinkType } from "@/generated/prisma";
import CopyBtn from "../buttons/CopyBtn";

type Props = {
    link: LinkType;
    idx: number;
    showTooltip: number | null;
    setShowTooltip: React.Dispatch<React.SetStateAction<number | null>>;
    handleLinkInteraction: (idx: number) => void;
};

export function getDomain(url: string) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return "";
    }
}

const LinkCard = ({
    link,
    idx,
    showTooltip,
    setShowTooltip,
    handleLinkInteraction,
}: Props) => {
    return (
        <motion.div
            key={link.url}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="group p-6 h-36 flex flex-col justify-between rounded-md border border-ring/20 bg-gradient-to-br from-[#1a1b3d] via-[#2e1f4d] to-[#3d1b4d] backdrop-blur-lg hover:border-accent/30 hover:shadow-stars transition-all duration-200 relative overflow-hidden"
        >
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
                <h3 className="font-semibold text-lg text-foreground mb-1 backdrop-blur-sm">
                    <span className="text-foreground">{link.name}</span>
                </h3>

                {/* URL Tooltip */}
                <div
                    className="relative w-fit hoverable-link"
                    onMouseEnter={() => handleLinkInteraction(idx)}
                    onMouseLeave={() => setShowTooltip(null)}
                    onClick={e => {
                        e.stopPropagation();
                        handleLinkInteraction(idx);
                    }}
                >
                    <span className="text-base text-muted-foreground truncate max-w-[180px] inline-block cursor-pointer hover:text-foreground transition-colors underline underline-offset-4 decoration-dotted">
                        {link.url}
                    </span>
                    {showTooltip === idx && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute z-20 left-0 mt-2 px-3 py-2 rounded-lg bg-card border border-ring/30 shadow-xl backdrop-blur-sm"
                        >
                            <div className="text-sm text-foreground flex items-center gap-2">
                                <i className="fa-solid fa-link text-accent" />
                                {link.url}
                            </div>
                            <div className="absolute -top-1.5 left-4 w-3 h-3 bg-card border-t border-l border-ring/30 rotate-45" />
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-end mt-2 backdrop-blur-sm">
                <CopyBtn
                    size="sm" 
                    className="text-foreground/80 hover:bg-accent/10 hover:text-accent rounded-lg px-3 transition-all cursor-pointer"
                    url={link.url}
                />
            </div>
        </motion.div>
    );
}

export default LinkCard;