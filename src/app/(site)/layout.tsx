import clsx from "clsx";
import "@/styles/globals.css"
import MainNav from "@/components/nav";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function SiteLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <main className="min-h-screen relative w-screen flex flex-col items-center justify-center">
            {children}
            <MainNav />
        </main>
    );
}
