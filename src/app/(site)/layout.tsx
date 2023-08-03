import clsx from "clsx"

import "@/styles/globals.css"

import NavDock from "@/components/dock"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function SiteLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <main className="relative flex min-h-screen w-screen flex-col items-center justify-center">
            {children}
            <section className="fixed bottom-4 left-0 right-0 mx-auto inline w-[28%] transform">
                <NavDock />
            </section>
        </main>
    )
}
