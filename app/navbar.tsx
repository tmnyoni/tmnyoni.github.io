"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./mobile-menu";


const Navbar = () => {
    const [menuToggled, setMenuToggled] = useState(false);
    const handleMenuToggle = () => setMenuToggled(!menuToggled);

    return (
        <nav className="w-full mx-auto sticky">
            <div className="container">
                <div className="flex items-center justify-between px-4 py-2">
                    <Link href="/" className="text-sm font-medium">
                        Tawanda M.
                    </Link>
                    <MobileMenu />
                    <div
                        className={`hidden transform md:flex md:relative md:space-y-0 md:translate-x-0 md:space-x-1 md:min-h-min md:items-center md:rounded-lg md:border md:px-4 md:py-2 md:text-xs md:font-semibold`}
                    >
                        <div>
                            <Link href="about" className="px-4 py-2">
                                About
                            </Link>
                        </div>
                        <div>
                            <Link href="projects" className="px-4 py-2">
                                Projects
                            </Link>
                        </div>
                        <div>
                            <Link href="articles" className="px-4 py-2">
                                Articles
                            </Link>
                        </div>
                        <div>
                            <Link href="skills" className="px-4 py-2">
                                Skills
                            </Link>
                        </div>
                        <div>
                            <Link href="contact" className="px-4 py-2">
                                Contact me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
