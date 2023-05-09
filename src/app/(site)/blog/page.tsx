import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <main className="min-h-screen w-screen flex flex-col items-center justify-center">
            <div className="text-[90px] max-w-[19ch] leading-none text-center">
                Blog
            </div>
            <div className="py-4 px-40 absolute bottom-12 transform shadow border flex space-x-16">
                <Link href="/">Home</Link>
                <Link href="/about-me">About Me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/chat-me">Chat Me</Link>
            </div>
        </main>
    );
}
