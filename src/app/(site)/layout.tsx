import "@/styles/globals.css"

import DesktopDock, { MobileDock } from "@/components/dock"

import { ToggleThemeButton } from "./theme-button"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function SiteLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <main className="relative min-h-screen">
            <div className="grid h-screen place-items-center">
                <ToggleThemeButton />

                {children}
                <section className="fixed bottom-4 left-0 right-0 mx-auto inline w-fit transform">
                    <DesktopDock className="sm:flex" />
                    <MobileDock className="sm:hidden" />
                </section>
            </div>
            <Footer />
        </main>
    )
}

export function Footer() {
    return (
        <div className="mx-1 grid flex-col place-items-center justify-center rounded bg-gray-100/40 px-4 dark:bg-black/90 md:mx-4">
            <div className="mt-20 text-lg font-bold">My Portfolio</div>
            <div className="mb-28 mt-10 space-y-10">
                <div>
                    <h3 className="font-medium">Designer and Developer</h3>
                    <p className="mt-2 text-sm"> Tawanda M. Nyoni</p>
                </div>
                <div>
                    <h3 className="font-medium">Costumes and Designs</h3>
                    <p className="text-sm">Figma</p>
                </div>
                <div className="space-y-1">
                    <h3 className="font-medium">Cast</h3>
                    <p className="text-sm"> ReactJS </p>
                    <p className="text-sm"> Next.js </p>
                    <p className="text-sm"> Tailwindcss </p>
                </div>
            </div>
        </div>
    )
}
