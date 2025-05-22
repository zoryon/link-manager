"use client";

import { useUsers } from "@/hooks/use-users";
import UserCard from "./UserCard";

const UsersGrid = () => {
    const { filteredUsers } = useUsers();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-3">
            {filteredUsers.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersGrid;
