"use client";

import UsersHeader from "@/components/users-page/UsersHeader";
import UsersFilterSection from "@/components/users-page/UsersFilterSection";
import EmptyState from "@/components/EmptyState";
import SkeletonGrid from "@/components/SkeletonGrid";
import { useUsers } from "@/hooks/use-users";
import Grid from "@/components/Grid";
import UserCard from "@/components/users-page/UserCard";

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
                    <Grid
                        data={filteredUsers}
                        component={({ data }) => <UserCard user={data} />}
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

export default UsersPage;