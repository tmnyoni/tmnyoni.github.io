import "@/styles/globals.css"

import Link from "next/link"
import {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
} from "lucide-react"

import DesktopDock, { MobileDock } from "@/components/dock"

import { ToggleThemeButton } from "./theme-button"

interface SiteLayoutProps {
    children: React.ReactNode
}

export default function SiteLayout(props: Readonly<SiteLayoutProps>) {
    const { children } = props

    return (
        <main className="relative min-h-screen">
            <div className="grid h-screen place-items-center">
                <ToggleThemeButton />

                {children}
                <section className="fixed bottom-6 left-0 right-0 mx-auto inline w-fit transform">
                    <DesktopDock className="sm:flex" />
                    <MobileDock className="sm:hidden" />
                </section>
            </div>
            <Footer />
        </main>
    )
}

function Footer() {
    return (
        <div className="mx-1 mb-3 grid flex-col place-items-center justify-center rounded-3xl bg-gray-200/50 px-4 dark:bg-black/90 md:mx-4">
            <div className="mt-20 text-xl font-black">My Portfolio</div>
            <div className="mt-4 flex items-center gap-x-4">
                <Link
                    target="blank"
                    className="rounded-full p-2 hover:bg-gray-50"
                    href="https://www.instagram.com/__tm.nyoni__/"
                >
                    <InstagramIcon />
                </Link>
                <Link
                    target="blank"
                    className="rounded-full p-2 hover:bg-gray-50"
                    href="https://www.facebook.com/tmnyoni"
                >
                    <FacebookIcon />
                </Link>
                <Link
                    target="blank"
                    className="rounded-full p-2 hover:bg-gray-50"
                    href="https://www.x.com/tmnyoni"
                >
                    <TwitterIcon />
                </Link>
                <Link
                    target="blank"
                    className="rounded-full p-2 hover:bg-gray-50"
                    href="https://www.linkedin.com/in/tmnyoni"
                >
                    <LinkedinIcon />
                </Link>
                <Link
                    target="blank"
                    className="rounded-full p-2 hover:bg-gray-50"
                    href="https://github.com/tmnyoni"
                >
                    <GithubIcon />
                </Link>
            </div>
            <div className="mt-5 h-px min-w-96 bg-gradient-to-r from-white via-gray-900 to-white" />
            <div className="mb-28 mt-10 space-y-10">
                <div>
                    <h3 className="font-medium">Designer and Developer</h3>
                    <p className="mt-2 text-sm"> Tawanda M. Nyoni</p>
                </div>
                <div>
                    <h3 className="font-medium">Designs (UI & UX)</h3>
                    <p className="text-sm">Figma</p>
                </div>
                <div className="space-y-1">
                    <h3 className="font-medium">Cast</h3>
                    <p className="text-sm"> ReactJS </p>
                    <p className="text-sm"> Next.js </p>
                    <p className="text-sm"> Tailwindcss </p>
                    <p className="text-sm"> Framer Motion </p>
                </div>
            </div>
        </div>
    )
}
