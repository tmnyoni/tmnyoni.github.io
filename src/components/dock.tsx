"use client"

import Link from "next/link";
import { useRef } from "react";

import {
    motion,
    MotionValue,
    useMotionValue,
    useTransform,
    useSpring
} from "framer-motion";
import { DockItem } from "./dock-item";
import { dockItems } from "@/config/dock-items";

export default function NavDock() {
    let mouseXPosition = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseXPosition.set(e.pageX)}
            onMouseLeave={() => mouseXPosition.set(Infinity)}
            className="mx-auto flex h-16 items-end bg-slate-100 pb-3 px-4 justify-evenly rounded-lg"
        >
            {dockItems.map(({ href, label, icon }, index) => (
                <DockItem
                    href={href}
                    label={label}
                    key={index}
                    mouseXPosition={mouseXPosition}
                    icon={icon}
                />
            ))}
        </motion.div>
    )
}
