"use client";

import { useHome } from "@/hooks/use-home";
import HomeHeader from "@/components/home-components/HomeHeader";
import HomeFilterSection from "@/components/home-components/HomeFilterSection";
import ActiveFiltersSection from "@/components/home-components/ActiveFiltersSection";
import EmptyState from "@/components/home-components/EmptyState";
import LinksGrid from "@/components/home-components/LinksGrid";
import SkeletonGrid from "@/components/home-components/SkeletonGrid";

const Home = () => {
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
                    <EmptyState />
                ) : (
                    <LinksGrid />  
                )}
            </main>
        </div>
    );
};

export default Home;