"use client"

import { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import { Home, LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { dockIcons } from "@/components/icons"

type DockItemProps = {
    mouseXPosition: MotionValue<number>
    href: string
    label: string
    icon: string
} & React.HTMLAttributes<HTMLAnchorElement>

export function DockItem({
    mouseXPosition,
    href,
    label,
    icon,
    className,
    ...props
}: DockItemProps) {
    let ref = useRef<HTMLDivElement>(null)

    let distanceFromMouseXToElementCenter = useTransform(
        mouseXPosition,
        (mouseXValue: number) => {
            let elementBounds = ref.current?.getBoundingClientRect() ?? {
                x: 0,
                width: 0,
            }
            return mouseXValue - elementBounds.x - elementBounds.width / 2
        }
    )

    let domain = [-150, 0, 150]
    let range = [40, 100, 40]
    let widthSynchronizer = useTransform(
        distanceFromMouseXToElementCenter,
        domain,
        range
    )

    let width = useSpring(widthSynchronizer, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    })

    const pathname = usePathname()
    // @ts-ignore
    const Icon: LucideIcon = dockIcons[icon]
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex flex-col items-center",
                className
            )}
            {...props}
        >
            <div className="text-medium mb-1 hidden rounded-lg bg-slate-100 px-3 py-1 text-xs  opacity-0 duration-300 group-hover:block group-hover:scale-110 group-hover:opacity-80">
                {label}
            </div>

            <motion.div
                ref={ref}
                style={{ width }}
                className="flex aspect-square w-10 items-center justify-center  rounded-xl bg-slate-200 shadow-lg duration-100 active:scale-90"
            >
                <Icon className="duration-100 group-hover:scale-150" />
                <span className="sr-only">{label}</span>
            </motion.div>
            <div
                className={cn(
                    "absolute bottom-0 aspect-square h-1 rounded-full bg-red-700",
                    pathname === href ? "block" : "hidden"
                )}
            ></div>
        </Link>
    )
}
