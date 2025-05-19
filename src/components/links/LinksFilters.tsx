"use client";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  search: string;
  setSearch: (val: string) => void;
  domain: string;
  setDomain: (val: string) => void;
  allDomains: string[];
  createdFrom: string;
  setCreatedFrom: (val: string) => void;
  createdTo: string;
  setCreatedTo: (val: string) => void;
  updatedFrom: string;
  setUpdatedFrom: (val: string) => void;
  updatedTo: string;
  setUpdatedTo: (val: string) => void;
};

const LinksFilters = ({
  search, setSearch,
  domain, setDomain,
  allDomains,
  createdFrom, setCreatedFrom,
  createdTo, setCreatedTo,
  updatedFrom, setUpdatedFrom,
  updatedTo, setUpdatedTo,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
    >
      <div className="relative flex-1">
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg" />
        <Input
          placeholder="Search..."
          className="pl-12 h-12 rounded-xl border border-ring/30 bg-card/50 focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/80"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <select
        className="h-12 px-3 rounded-xl border border-ring/30 bg-card/50 focus:ring-2 focus:ring-accent/50 transition-all"
        value={domain}
        onChange={e => setDomain(e.target.value)}
      >
        <option value="" className="bg-card">All Domains</option>
        {allDomains.map((d) => (
          <option value={d} key={d} className="bg-card">
            {d}
          </option>
        ))}
      </select>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="date"
          className="h-12 rounded-xl border border-ring/30 bg-card/50 focus:ring-2 focus:ring-accent/50 transition-all text-muted-foreground/80 min-w-[160px]"
          value={createdFrom}
          onChange={e => setCreatedFrom(e.target.value)}
          placeholder="Created from"
          title="Created from"
        />
        <Input
          type="date"
          className="h-12 rounded-xl border border-ring/30 bg-card/50 focus:ring-2 focus:ring-accent/50 transition-all text-muted-foreground/80 min-w-[160px]"
          value={createdTo}
          onChange={e => setCreatedTo(e.target.value)}
          placeholder="Created to"
          title="Created to"
        />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="date"
          className="h-12 rounded-xl border border-ring/30 bg-card/50 focus:ring-2 focus:ring-accent/50 transition-all text-muted-foreground/80 min-w-[160px]"
          value={updatedFrom}
          onChange={e => setUpdatedFrom(e.target.value)}
          placeholder="Updated from"
          title="Updated from"
        />
        <Input
          type="date"
          className="h-12 rounded-xl border border-ring/30 bg-card/50 focus:ring-2 focus:ring-accent/50 transition-all text-muted-foreground/80 min-w-[160px]"
          value={updatedTo}
          onChange={e => setUpdatedTo(e.target.value)}
          placeholder="Updated to"
          title="Updated to"
        />
      </div>
    </motion.div>
  );
}

export default LinksFilters;