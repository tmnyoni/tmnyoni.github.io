"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./mobile-menu";

interface INavItem {
    text: string;
    url: string;
}

export interface INavProps {
    navItems: INavItem[]
}

const navItems = [
    {
        url: "about",
        text: "About"
    },
    {
        url: "projects",
        text: "Projects"
    },
    {
        url: "articles",
        text: "Articles"
    },
    {
        url: "skills",
        text: "skills"
    }
]

export default function Navbar(){
    return (
        <nav className="w-full mx-auto md:w-9/12 sticky">
            <div className="container mx-auto">
                <div className="flex items-center justify-between px-4 py-2">
                    <Link href="/" className="text-sm font-medium">
                        Tawanda M.
                    </Link>
                    <MobileMenu navItems={navItems} />

                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map(item =>
                            <Link href={item.url} key={item.text}>
                                {item.text}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
