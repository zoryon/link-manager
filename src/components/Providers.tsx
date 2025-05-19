import { AuthProvider } from "@/hooks/use-auth";

const Providers = ({ children }: { children: React.ReactNode}) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default Providers;