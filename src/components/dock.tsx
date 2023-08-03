"use client"

import { useRef } from "react"
import Link from "next/link"
import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"

import { dockItems } from "@/config/dock-items"
import { DockItem } from "@/components/dock-item"

export default function NavDock() {
    let mouseXPosition = useMotionValue(Infinity)

    return (
        <motion.nav
            onMouseMove={(e) => mouseXPosition.set(e.pageX)}
            onMouseLeave={() => mouseXPosition.set(Infinity)}
            className="mx-auto flex h-16 items-end justify-evenly rounded-2xl bg-slate-100 px-4 pb-3"
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
