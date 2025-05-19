"use client";
import LinkCard from "./LinkCard";
import React from "react";
import { links as LinkType } from "@/generated/prisma";

type Props = {
  filteredLinks: LinkType[];
  showTooltip: number | null;
  setShowTooltip: React.Dispatch<React.SetStateAction<number | null>>;
  handleLinkInteraction: (idx: number) => void;
};

const LinksGrid = ({
  filteredLinks,
  showTooltip,
  setShowTooltip,
  handleLinkInteraction,
}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {filteredLinks.map((link, idx) => (
        <LinkCard
          key={link.url}
          link={link}
          idx={idx}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
          handleLinkInteraction={handleLinkInteraction}
        />
      ))}
      {filteredLinks.length === 0 && (
        <div>No links here</div>
      )}
    </div>
  );
}

export default LinksGrid;