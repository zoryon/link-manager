"use client";

import { AuthProvider } from "@/hooks/use-auth";
import { HomeProvider } from "@/hooks/use-home";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <HomeProvider>
                {children}
            </HomeProvider>
        </AuthProvider>
    );
}

export default Providers;