import AdminFirewall from "@/components/AdminFirewall";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AdminFirewall>
            {children}
        </AdminFirewall>
    );
}
