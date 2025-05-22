import { UsersProvider } from "@/hooks/use-users";

export default function UsersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UsersProvider>
            {children}
        </UsersProvider>
    );
}
