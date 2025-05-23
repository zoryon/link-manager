"use client";

import { AuthProvider } from "@/hooks/use-auth";
import { LinksProvider } from "@/hooks/use-links";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <LinksProvider>
                {children}
            </LinksProvider>
        </AuthProvider>
    );
}

export default Providers;