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

export default function NavDock() {
    let mouseXPosition = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseXPosition.set(e.pageX)}
            onMouseLeave={() => mouseXPosition.set(Infinity)}
            className="mx-auto flex h-16 items-end bg-gray-200 pb-3 px-4 justify-evenly rounded-3xl"
        >
            {[
                {
                    href: "/",
                    title: "Home",
                },
                {
                    href: "/about-me",
                    title: "About Me",
                },
                {
                    href: "/projects",
                    title: "Projects",
                },
                {
                    href: "/blog",
                    title: "Blog",
                },
                {
                    href: "/chat-me",
                    title: "Chat Me",
                }
            ].map(({ href, title }, index) => (
                <DockItem
                    href={href}
                    title={title}
                    key={index}
                    mouseXPosition={mouseXPosition}
                />
            ))}
        </motion.div>
    )
}

type DockNavItem = {
    mouseXPosition: MotionValue<number>;
    href: string;
    title: string;
}

export function DockItem({ mouseXPosition, href, title }: DockNavItem) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseXPosition, (val: number) => {
        let elementBounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - elementBounds.x - elementBounds.width / 2;
    });

    let widthSynchronizer = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    let width = useSpring(widthSynchronizer, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href} className="group">
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square w-10 rounded-full flex items-center  justify-center bg-gray-300 shadow"
            >
                <div className="hidden group-hover:block">
                    {title}
                </div>
            </motion.div>
        </Link>
    )
}