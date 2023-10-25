import "@/styles/globals.css"

import DesktopDock, { MobileDock } from "@/components/dock"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function SiteLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <main className="relative flex min-h-screen w-screen flex-col items-center justify-center">
            {children}
            <section className="fixed bottom-4 left-0 right-0 mx-auto inline w-fit transform">
                <DesktopDock />
                <MobileDock />
            </section>
        </main>
    )
}
