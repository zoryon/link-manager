"use client";

import { AuthProvider } from "@/hooks/use-auth";
import { HomeProvider } from "@/hooks/use-home";
import { useSearchParams } from "next/navigation";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const searchParams = useSearchParams();
    const paramsObject = Object.fromEntries(searchParams.entries());

    return (
        <AuthProvider>
            <HomeProvider searchParams={paramsObject}>
                {children}
            </HomeProvider>
        </AuthProvider>
    );
}

export default Providers;