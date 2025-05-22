"use client";

import UsersHeader from "@/components/users-page/UsersHeader";
import UsersFilterSection from "@/components/users-page/UsersFilterSection";
import EmptyState from "@/components/EmptyState";
import UsersGrid from "@/components/users-page/UsersGrid";
import SkeletonGrid from "@/components/SkeletonGrid";
import { useUsers } from "@/hooks/use-users";

const UsersPage = () => {
    const {
        isPending,
        filteredUsers,
        users,
    } = useUsers();

    return (
        <div className="min-h-[88vh]">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                <UsersHeader />

                <UsersFilterSection />

                {/* Results Count */}
                <p className="text-sm md:text-base mb-4 text-trivial">
                    Showing {filteredUsers.length} of {users.length} links
                </p>

                {/* Loading State */}
                {isPending ? (
                    <SkeletonGrid />
                ) : filteredUsers.length === 0 ? (
                    <EmptyState use="users" />
                ) : (
                    <UsersGrid />
                )}
            </main>
        </div>
    );
}

export default UsersPage;