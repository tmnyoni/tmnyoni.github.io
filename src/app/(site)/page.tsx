import MainNav from "@/components/nav";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <main>
            <div className="font-medium text-lg"> Hey, Im Tawanda M. </div>
            <div className="text-[90px] max-w-[19ch] leading-none text-center font-medium"> 
            Software Developer and UI & UX Designer
            </div>
            <MainNav />
        </main>
    );
}
