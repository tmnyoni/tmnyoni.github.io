"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [menuToggled, setMenuToggled] = useState(false);
    const handleMenuToggle = () => setMenuToggled(!menuToggled);

    return (
        <nav className="py-4 mx-auto">
            <div className="container m-auto w-full">
                <div className="w-full flex items-center justify-between relative">
                    <div className="rounded-l-full">
                        <Link href="/" className="flex items-center text-sm font-semibold">
                            Tawanda M.
                        </Link>
                    </div>
                    <button
                        className="inline-flex md:hidden px-2 hover:bg-gray-100 rounded"
                        onClick={handleMenuToggle}
                    >
                        <Bars3Icon className="h-6 w-6 text-gray-800" />
                    </button>
                    <div
                        className={`${menuToggled
                                ? " block fixed right-0 left-0 z-10 top-0 bg-white min-h-screen space-y-4 pt-6 translate-x-0 duration-1000"
                                : "hidden translate-x-full"
                            } transform md:flex md:relative md:space-y-0 md:translate-x-0 md:space-x-1 md:min-h-min md:items-center md:rounded-lg md:border md:px-4 md:py-2 md:text-xs md:font-semibold`}
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
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
