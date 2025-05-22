"use client";

import { createContext, useContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from "react";
import { ApiResponse, PublicUser } from "@/types";
import { api } from "@/lib/endpoint-builder";

type UsersContextType = {
    isPending: boolean;
    users: PublicUser[];
    setUsers: Dispatch<SetStateAction<PublicUser[]>>;
    nameFilter: string;
    setNameFilter: (value: string) => void;
    filteredUsers: PublicUser[];
    clearAllFilters: () => void;
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export function UsersProvider({ children }: { children: React.ReactNode }) {
    const [isPending, setIsPending] = useState(true);
    const [users, setUsers] = useState<PublicUser[]>([]);
    const [nameFilter, setNameFilter] = useState("");

    // Memoize derived data
    const filteredUsers = useMemo(() =>
        users.filter(user => {
            const matchesName = user.username?.toLowerCase().includes(nameFilter.toLowerCase());

            return matchesName;
        }), [users, nameFilter]);

    // Fetch users
    useEffect(() => {
        async function fetchLinks() {
            setIsPending(true);
            try {
                const res: ApiResponse = await fetch(api.users.get.path, {
                    method: api.users.get.method,
                }).then(res => res.json());
                if (res.success) setUsers(res.data);
                else console.error(res.message);
            } catch (error) {
                console.error("Fetch error: ", error);
            }
            setIsPending(false);
        }
        fetchLinks();
    }, []);

    function clearAllFilters() {
        setNameFilter("");
    }

    const value = {
        isPending,
        users,
        setUsers,
        nameFilter,
        setNameFilter,
        filteredUsers,
        clearAllFilters
    };

    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}

export function useUsers() {
    const context = useContext(UsersContext);
    if (context === undefined) {
        throw new Error("useUsers must be used within a UsersProvider");
    }
    return context;
}