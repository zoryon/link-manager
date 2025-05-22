"use client";

import { useHome } from "@/hooks/use-home";
import LinkCard from "@/components/home-page/LinkCard";

const LinksGrid = () => {
    const { filteredLinks } = useHome();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-3">
            {filteredLinks.map(link => (
                <LinkCard key={link.id} link={link} />
            ))}
        </div>
    );
};

export default LinksGrid;
