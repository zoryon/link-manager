"use client";

import { Button } from "@/components/ui/button";
import { users_role } from "@/generated/prisma";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const LinkHeader = () => {
    const { currentUser } = useAuth();
    const router = useRouter();
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text tracking-tight">
                    My links
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                    Manage your resources
                </p>
            </div>
            {currentUser && currentUser.role === users_role.ADMIN && (
                <Button
                    variant="default"
                    className="gap-2 h-12 px-7 rounded-xl bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-galaxy transition-transform duration-200 hover:scale-[1.02]"
                    size="lg"
                    onClick={() => router.push("/links/create")}
                >
                    <i className="fa-solid fa-plus text-lg" />
                    New Link
                </Button>
            )}
        </motion.div>
    );
}

export default LinkHeader;