import clsx from "clsx";
import "@/styles/globals.css"

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function SiteLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <main>
            {children}
        </main>
    );
}
