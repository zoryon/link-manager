import Navbar from "@/components/navigation/navbar/Navbar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Link Manager | Home Page",
    description: "Manage your links in a centralized way.",
};

export default function CoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <header>
                <Navbar />
            </header>
            <main className="flex-1 p-6 md:p-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </Providers>
    );
}
