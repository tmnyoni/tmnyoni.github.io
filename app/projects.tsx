'use client'

import { useState } from "react";
import clsx from "clsx";
import Project from "./project";

interface IProject {
    title: string;
    imageUrl: string;
    description: string;
    sourceUrl: string;
}

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const gotoSlideWithIndex = (index: number) => {
        setCurrentIndex(index);
    }

    const projects: IProject[] = [
        {
            title: "Lecui User Interface Builder",
            imageUrl: "/assets/images/lecui.jpeg",
            description:
                "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
            sourceUrl: "https:github.com/alecmus/lecui",
        },
        {
            title: "Tawanda M. Portfolio",
            imageUrl: "/assets/images/lecui.jpeg",
            description:
                "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
            sourceUrl: "https:github.com/alecmus/lecui",
        },
        {
            title: "Mpilo Website",
            imageUrl: "/assets/images/lecui.jpeg",
            description:
                "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
            sourceUrl: "https:github.com/alecmus/lecui",
        },
        {
            title: "Methodist Hymn",
            imageUrl: "/assets/images/lecui.jpeg",
            description:
                "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
            sourceUrl: "https:github.com/alecmus/lecui",
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center relative group md:px-8 lg:w-9/12">
            <div className="w-72 h-48 md:w-[500px] md:h-[300px] mt-16 bg-gray-200 rounded">
            </div>

            <div className="mt-8 px-4 md:w-[500px]">
                <div> {projects[currentIndex].title} </div>
                <p className="mt-6">
                    I am an active contributor to the lecui C++ Library,
                    which is used to create user interfaces using modern C++.
                </p>
            </div>

            <div
                onClick={prevSlide}
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-black px-1 absolute top-1/2 -translate-x-0 -translate-y-1/2 left-0 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </div>

            <div
                onClick={nextSlide}
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-black px-1 absolute top-1/2 -translate-x-0 -translate-y-1/2 right-0 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>

            <div className="flex top-4 justify-center py-2 space-x-1 mt-10">
                {projects.map((project, index) =>
                    <div
                        key={index}
                        className={clsx("h-4 rounded-full bg-black", index === currentIndex ? "w-8" : "w-4")}
                        onClick={() => gotoSlideWithIndex(index)}
                    >
                    </div>
                )}
            </div>
        </div>
    );
}
