"use client"

import { ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useMotionValue } from "framer-motion"
import { LucideIcon } from "lucide-react"

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
    const pathname = usePathname()
    return (
        <div
            className={cn(
                "flex items-center space-x-1.5 rounded-xl p-1.5",
                className
            )}
            {...props}
        >
            {dockItems.map(({ href, label, icon }) => {
                const Icon: LucideIcon =
                    dockIcons[icon as keyof typeof dockIcons]
                return (
                    <Link
                        key={label}
                        href={href}
                        className={cn(
                            "group relative flex flex-col items-center bg-slate-100",
                            className
                        )}
                    >
                        <div className="flex aspect-square w-10 items-center justify-center  rounded-xl bg-slate-200 shadow-lg duration-100">
                            <Icon className="" />
                            <span className="sr-only">{label}</span>
                        </div>
                        <div
                            className={cn(
                                "absolute bottom-0 aspect-square h-1 rounded-full bg-red-700",
                                pathname === href ? "block" : "hidden"
                            )}
                        ></div>
                    </Link>
                )
            })}
        </div>
    )
}
