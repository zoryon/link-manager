"use client";

import { users_role } from "@/generated/prisma";
import { api } from "@/lib/endpoint-builder";
import { ApiResponse, PublicUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextProps = {
    currentUser: PublicUser | null,
    isPending: boolean,
    isAdmin: () => boolean,
    refreshAuth: () => void,
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<PublicUser | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);

    async function fetchCurrentUser() {
        try {
            setIsPending(true);
            const res: ApiResponse = await fetch(api.me.get.path, {
                method: "GET"
            }).then(res => res.json());
            
            if (res.success) {
                setCurrentUser(res.data);
            } else {
                console.error(res.message);
            }
            setIsPending(false);
        } catch (error: any) {
            console.error(error.message);
            setIsPending(false);
        }
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    function isAdmin() {
        return !isPending && currentUser?.role === users_role.ADMIN;
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isPending,
                isAdmin,
                refreshAuth: () => fetchCurrentUser(),
            }}
        >
            {children}
        </AuthContext.Provider>
    )
} 

export function useAuth() {
    return useContext(AuthContext);
}   