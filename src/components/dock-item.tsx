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
import { Home, LucideIcon } from "lucide-react";


type DockItemProps = {
    mouseXPosition: MotionValue<number>;
    href: string;
    label: string;
    icon: LucideIcon
} & React.HTMLAttributes<HTMLDivElement>

export function DockItem({ mouseXPosition, href, label }: DockItemProps) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseXPosition, (val: number) => {
        let elementBounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - elementBounds.x - elementBounds.width / 2;
    });

    let widthSynchronizer = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    let width = useSpring(widthSynchronizer, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href} className="group relative">
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square w-10 rounded flex items-center  justify-center bg-slate-200 shadow-lg active:scale-90 duration-100"
            >
                <Home />
            </motion.div>
                <div className="fixed"></div>
        </Link>
    )
}