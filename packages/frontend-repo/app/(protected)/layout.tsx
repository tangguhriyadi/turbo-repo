import Navbar from "@/components/Navbar";
import ProtectedRouteProvider from "@/providers/ProtectedRouteProvider";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProtectedRouteProvider>
            <Navbar />
            {children}
        </ProtectedRouteProvider>
    );
}
