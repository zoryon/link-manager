"use client";

import { useLinks } from "@/hooks/use-links";
import HomeHeader from "@/components/home-page/HomeHeader";
import HomeFilterSection from "@/components/home-page/HomeFilterSection";
import ActiveFiltersSection from "@/components/home-page/ActiveFiltersSection";
import EmptyState from "@/components/EmptyState";
import Grid from "@/components/Grid";
import SkeletonGrid from "@/components/SkeletonGrid";
import LinkCard from "@/components/home-page/LinkCard";

const HomePage = () => {
  const {
    isPending,
    filteredLinks,
    links,
  } = useLinks();

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
          <Grid
            data={filteredLinks}
            component={({ data }) => <LinkCard link={data} />}
            emptyMessage="No link found"
            gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            gapClass="gap-2 xl:gap-3"
            keyProp="id"
          />
        )}
      </main>
    </div>
  );
}

export default HomePage;