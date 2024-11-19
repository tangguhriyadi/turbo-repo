import UnProtectedRouteProvider from "@/providers/UnProtectedRouteProvider";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <UnProtectedRouteProvider>{children}</UnProtectedRouteProvider>;
}
