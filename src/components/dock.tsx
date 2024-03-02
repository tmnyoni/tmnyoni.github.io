"use client"

import { ComponentProps, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useMotionValue } from "framer-motion"
import { LayoutDashboardIcon, LucideIcon } from "lucide-react"

import { dockItems } from "@/config/dock-items"
import { cn } from "@/lib/utils"
import { DockItem } from "@/components/dock-item"

import { dockIcons } from "./icons"

type DesktopDockProps = ComponentProps<"div">
export default function DesktopDock({ className }: Readonly<DesktopDockProps>) {
    let mouseXPosition = useMotionValue(Infinity)

    return (
        <motion.nav
            onMouseMove={(e) => mouseXPosition.set(e.pageX)}
            onMouseLeave={() => mouseXPosition.set(Infinity)}
            className={cn(
                "mx-auto hidden h-16 items-end justify-evenly gap-4 rounded-2xl bg-slate-200 px-4 pb-3 dark:bg-slate-800",
                className
            )}
        >
            {dockItems.map(({ href, label, icon }) => (
                <DockItem
                    key={label}
                    label={label}
                    href={href}
                    icon={icon}
                    mouseXPosition={mouseXPosition}
                />
            ))}
        </motion.nav>
    )
}

type MobileDockProps = ComponentProps<"div">
export function MobileDock({ className, ...props }: MobileDockProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative text-black sm:hidden">
            <div
                className="relative z-50 grid size-12 place-items-center rounded-2xl border bg-white shadow-inner "
                onClick={() => setOpen((prev) => !prev)}
            >
                <LayoutDashboardIcon />
            </div>
            <div
                className={cn(
                    "absolute -top-0 z-10  rotate-[90deg]",
                    open ? "flex" : "hidden"
                )}
            >
                <div className="absolute -left-[125px] -top-[170px] h-[300px] w-screen rounded-full border bg-white/80 shadow" />
                {dockItems.map((dockItem, index) => (
                    <MobileItem
                        key={index}
                        index={index}
                        href={dockItem.href}
                        icon={dockItem.icon}
                    />
                ))}
            </div>
        </div>
    )
}

type MobileItem = {
    icon: string
    href: string
    index: number
}
export function MobileItem({ icon, href, index }: Readonly<MobileItem>) {
    const pathname = usePathname()

    const Icon: LucideIcon = dockIcons[icon as keyof typeof dockIcons]
    return (
        <Link
            href={href}
            key={index}
            data-index={`${index}`}
            style={{
                transform: `rotate(calc(${index}*360deg/10)) translateY(110px)`,
            }}
            className={cn(
                `absolute -top-10 grid size-10 translate-y-0 place-items-center rounded-full  duration-300`,
                pathname.endsWith(href) && "bg-black text-white"
            )}
        >
            <Icon
                style={{ transform: `rotate(calc(270deg - ${index}*36deg))` }}
            />
        </Link>
    )
}
