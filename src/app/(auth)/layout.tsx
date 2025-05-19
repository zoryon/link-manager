import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Link Manager | Auth page",
    description: "Authenticatge to manage your links in a centralized way.",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
