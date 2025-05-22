"use client";

import { useHome } from "@/hooks/use-home";
import HomeHeader from "@/components/home-page/HomeHeader";
import HomeFilterSection from "@/components/home-page/HomeFilterSection";
import ActiveFiltersSection from "@/components/home-page/ActiveFiltersSection";
import EmptyState from "@/components/EmptyState";
import LinksGrid from "@/components/home-page/LinksGrid";
import SkeletonGrid from "@/components/home-page/SkeletonGrid";

const HomePage = () => {
  const {
    isPending,
    filteredLinks,
    links,
  } = useHome();

  return (
    <div className="min-h-[88vh]">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <HomeHeader />

        <HomeFilterSection />

        <ActiveFiltersSection />

        {/* Results Count */}
        <p className="text-sm md:text-base mb-4 text-trivial">
          Showing {filteredLinks.length} of {links.length} links
        </p>

        {/* Loading State */}
        {isPending ? (
          <SkeletonGrid />
        ) : filteredLinks.length === 0 ? (
          <EmptyState use="home" />
        ) : (
          <LinksGrid />
        )}
      </main>
    </div>
  );
}

export default HomePage;