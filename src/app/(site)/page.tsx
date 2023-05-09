import React from "react";

export const metadata = {
    title: "Home",
    description: "Welcome to the home page",
}

export default function Page() {
    return (
        <main className="min-h-screen w-screen flex flex-col items-center justify-center">
            <div> Hey, Im Tawanda M. </div>
            <div className="text-[90px] max-w-[19ch] leading-none text-center"> Software Developer and UI & UX Designer</div>
            <div className="py-4 px-40 absolute bottom-12 transform shadow border flex space-x-16">
                <div>About Me</div>
                <div>Projects</div>
                <div>Chat Me</div>
                <div>Blog</div>
            </div>
        </main>
    );
}
