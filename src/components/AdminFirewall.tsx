"use client";

import LoadingScreen from "@/components/loaders/LoadingScreen";
import { useAuth } from "@/hooks/use-auth";

const AdminFirewall = ({ children }: { children: React.ReactNode }) => {
    const { isAdmin, isPending } = useAuth();

    if (isPending) {
        return <LoadingScreen />;
    }

    return isAdmin() ? (
        <div>
            {children}
        </div>
    ) : (
        <div>
            Admin access required
        </div>
    );
}

export default AdminFirewall;