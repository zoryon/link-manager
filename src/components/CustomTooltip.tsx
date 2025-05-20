"use client";

import React, { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip";

interface CustomTooltipProps {
    text: string;
    className?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ text, className }) => {
    const [open, setOpen] = useState(false);

    // On mobile, allow click/tap to open the tooltip
    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        setOpen((prev) => !prev);
    };
    const handleTouchEnd = (e: React.TouchEvent<HTMLSpanElement>) => {
        e.preventDefault();
        setOpen((prev) => !prev);
    };

    return (
        <TooltipProvider>
            <Tooltip open={open} onOpenChange={setOpen}>
                <TooltipTrigger asChild>
                    <span
                        className={`truncate inline-block align-bottom cursor-pointer ${className ?? ""}`}
                        tabIndex={0}
                        onClick={handleClick}
                        onTouchEnd={handleTouchEnd}
                        title=""
                    >
                        {text}
                    </span>
                </TooltipTrigger>
                <TooltipContent className="break-words max-w-xs" onClick={() => setOpen(false)}>
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default CustomTooltip;