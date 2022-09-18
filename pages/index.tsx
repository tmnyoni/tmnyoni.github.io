import { ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    PhoneIcon,
    GlobeAltIcon,
    BugAntIcon,
    ChatBubbleBottomCenterTextIcon,
    ArrowPathIcon,
    CommandLineIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    CursorArrowRaysIcon,
    Cog6ToothIcon,
    ChatBubbleLeftEllipsisIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import AOS from 'aos';

import { NextPageWithLayout } from "./_app";
import Layout from "./components/layout";

const Home: NextPageWithLayout = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    },[]);

    return (
        <div>
            <div className="container m-auto ">
                <div className="mt-12 max-w-2xl">
                    <div className="mb-6">.
                        <div className="w-16 h-16 border rounded-full">
                            <Image
                                src={"/assets/images/icon.png"}
                                width={60}
                                height={60}
                                alt="icon"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl animate-[reveal_1s_forwards]">
                        Software engineer, developer and ui & ux designer
                    </h1>
                    <p className="mt-8 text-gray-700 animate-reveal">
                        I am Tawanda M, a passionate software developer, engineer and ui &
                        ux based in Zimbabwe, who is inspired to change the world through
                        technological solutions. I am also an enthusiastic researcher who is
                        keen to learn about cutting-edge technology that can help with
                        development.
                    </p>
                    <div className="mt-8 flex items-center">
                        <Link href="#">
                            <a className="mr-2 rounded-lg border px-6 py-2 font-semibold shadow bg-gray-900 text-gray-100 focus:bg-gray-800 focus:text-gray-100 hover:text-gray-100 focus:ring-gray-400 focus:outline-none focus:ring-2">
                                Contact me
                                <PhoneIcon className="ml-3 inline-block h-4  w-6 -rotate-180" />
                            </a>
                        </Link>
                        <Link href="https://github.com/tmnyoni">
                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-gray-600">
                                <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
                            </a>
                        </Link>
                        <Link href="https://linkedin/in/tmnyoni">
                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-gray-600">
                                <BugAntIcon className="inline h-6 w-6" />
                            </a>
                        </Link>
                        <Link href="https://tmnyoni.ml">
                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-gray-600">
                                <GlobeAltIcon className="inline h-6 w-6" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="container mx-auto">
                    <div className="mx-2 py-10 text-4xl font-extrabold">
                        <div className="align-center flex justify-between">
                            <h1>TypeScript</h1>
                            <h1>JavaScript</h1>
                            <h1>ReactJS</h1>
                            <h1>Next.JS</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/**
       * Skills and Projects.
       */}
            <div>
                <div className="container mx-auto">
                    <div className="mx-2 my-10">
                        <div className="grid gap-4 md:grid-cols-5">
                            <div className="grid grid-cols-1 gap-4 md:col-span-3">
                                <div className="rounded-xl py-8 px-6 hover:bg-gray-50">
                                    <ArrowPathIcon className="inline h-6 w-6 text-gray-500" />
                                    <h1 className="ml-3 inline-block text-sm font-semibold text-gray-800">
                                        Plan, Execute, Iterate
                                    </h1>
                                    <p className="mt-3 text-sm text-gray-800">
                                        I devise a plan for my project, carry it out, and then repeat the
                                        procedure. That is what I do on a daily basis.
                                    </p>
                                </div>
                                <div className="rounded-xl py-8 px-6 hover:bg-gray-50">
                                    <CommandLineIcon className="inline h-6 w-6 text-gray-500" />
                                    <h1 className="ml-3 inline-block text-sm font-semibold text-gray-800">
                                        Eat, Code, Sleep, Repeat
                                    </h1>
                                    <p className="mt-3 text-sm text-gray-800">
                                        I am a professional, passionate programmer who writes code every day with the goal of
                                        making the world a better place using my skills.
                                    </p>
                                </div>
                                <div className="rounded-xl py-8 px-6 hover:bg-gray-50">
                                    <AcademicCapIcon className="inline h-6 w-6 text-gray-500" />
                                    <h1 className="ml-3 inline-block text-sm font-semibold text-gray-800">
                                        Research, Practice, Research Again
                                    </h1>
                                    <p className="mt-3 text-sm text-gray-800">
                                        I never stop learning because I get to study new topics that are vital to my field
                                        and become acquainted with cutting-edge technologies.
                                    </p>
                                </div>
                                <div className="rounded-xl py-8 px-6 hover:bg-gray-50">
                                    <ChatBubbleLeftEllipsisIcon className="inline h-6 w-6 text-gray-500" />
                                    <h1 className="ml-3 inline-block text-sm font-semibold text-gray-800">
                                        Communicate, Collaborate
                                    </h1>
                                    <p className="mt-3 text-sm text-gray-800">
                                        I collaborate with others, and I&apos;ve been a part of some exciting projects. All I
                                        can say is that there is strength in numbers, especially when
                                        communication is effective.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full col-span-2">
                                <div className="mt-8 rounded-xl border px-3 py-5">
                                    <BriefcaseIcon className="inline h-6 w-6 text-slate-500" />
                                    <h4 className="ml-3 inline-block text-sm font-semibold text-slate-800">
                                        Projects
                                    </h4>

                                    <div className="mt-3 py-3">
                                        <CursorArrowRaysIcon className="inline h-6 w-6 text-slate-500" />
                                        <h4 className="ml-3 inline-block text-sm font-semibold text-slate-800">
                                            Lecui User Interface Library
                                        </h4>
                                        <p className="mt-3 text-sm text-gray-800">
                                            I am an active contributor to the lecui C++ Library, which is
                                            used to create user interfaces using modern C++.
                                        </p>
                                        <Link href="https://github.com/alecmus/lecui">
                                            <a className="text-xs text-gray-500 hover:text-gray-700">
                                                Check it out
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="mt-1 py-3">
                                        <Cog6ToothIcon className="inline h-6 w-6 text-slate-500" />
                                        <h4 className="ml-3 inline-block text-sm font-semibold text-slate-800">
                                            Automated Fault Report System
                                        </h4>
                                        <p className="mt-3 text-sm text-gray-800">
                                            I am a developer on a two-person team working on the
                                            Django-based Automated Fault Support System.
                                        </p>
                                        <Link href="https://github.com/qhelie/afss">
                                            <a className="text-xs text-gray-500 hover:text-gray-700">
                                                Check it out
                                            </a>
                                        </Link>
                                    </div>

                                    <Link href="projects">
                                        <a className="text-xs text-gray-500 hover:text-gray-700 border-b pb-0.5">
                                            Check out more projects <ArrowRightIcon className="w-3 h-3 inline" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**
       ** Social Proof.
       */}
            <div className="mt-10 py-6">
                <div className="container mx-auto">
                    <div className="mx-2 my-10">
                        <h1 className="max-w-xl text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                            I know you have trust issues, so listen to what others have to say about me.
                        </h1>
                    </div>

                    <div className="mx-2 my-12 grid gap-4 md:grid-cols-3">
                        <div className="rounded bg-gray-100 py-6 px-4">
                            <div className="flex items-center">
                                <Image
                                    src={"/assets/hero-image.jpg"}
                                    width={45}
                                    height={45}
                                    alt="bobo"
                                    className="inline-block rounded-full"
                                />
                                <div className="ml-4 inline-block">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Some on Stakeoverflow
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Developer
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-slate-800">
                                Tawanda is a great talent, and it has been a pleasure to collaborate with him.
                                He is a young, ambitious developer that is dedicated to his profession.
                            </p>
                        </div>
                        <div className="rounded bg-gray-100 py-6 px-4">
                            <div className="flex items-center">
                                <Image
                                    src={"/assets/hero-image.jpg"}
                                    width={45}
                                    height={45}
                                    alt="bobo"
                                    className="inline-block rounded-full"
                                />
                                <div className="ml-4 inline-block">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Some Random Guy
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Internet Surfer
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-slate-800">
                                I&apos;ve seen Tawanda M.&apos;s work and I&apos;ve seen him work; he&apos;s a genius.
                                His work demonstrates his obsession with perfection.
                            </p>
                        </div>
                        <div className="rounded bg-gray-100 py-6 px-4">
                            <div className="flex items-center">
                                <Image
                                    src={"/assets/hero-image.jpg"}
                                    width={45}
                                    height={45}
                                    alt="bobo"
                                    className="inline-block rounded-full"
                                />
                                <div className="ml-4 inline-block">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Coffee-Code Converter
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Code
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-slate-800">
                                This guy is a true genius, Its been a pleasure working with him.
                                He is a young ambious developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mx-auto">
                    <div className="mx-2 my-10">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="py-1 px-2">
                                <Image
                                    src="/assets/images/hero-image.png"
                                    width={350}
                                    height={400}
                                    alt="me-on-laptop"
                                />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-800"> Hi there, I&apos;m Tawanda M. Nyoni </h5>
                                <h3 className="mt-2 text-4xl font-light">
                                    Software Developer, Engineer Based in Zimbabwe
                                </h3>
                                <p className="mt-6 text-base text-slate-800">
                                    I am an enthusiastic software developer willing to
                                    contribute everything I have to any venture.
                                    Web development is my primary area of expertise.
                                    But I&apos;m not just a web developer; I also create
                                    desktop applications on occasion. I value both
                                    creativity and innovation.
                                </p>
                                <p className="mt-6 text-base text-slate-800">
                                    When I was in O level, I was introduced to programming through
                                    Visual Basic 6. I developed an interest in building
                                    amazing things and embraced it, learning to create cool
                                    apps but failing due to a lack of resources and knowledge
                                    until I reached A level.
                                </p>
                                <p className="mt-6 text-base text-slate-800">
                                    Since then, Ive dedicated my life to learning how to write
                                    better code and using my coding abilities to create
                                    amazing things that will change the world. I&apos;ve been
                                    doing research and practicing to get ready for my purpose.
                                    I&apos;ve done my homework.
                                </p>
                                <div className="mt-5 flex items-center text-slate-500">
                                    Find me on:
                                    <div className="inline-flex items-center">
                                        <Link href="https://github.com/tmnyoni">
                                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                                <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
                                            </a>
                                        </Link>
                                        <Link href="https://linkedin/in/tmnyoni">
                                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                                <BugAntIcon className="inline h-6 w-6" />
                                            </a>
                                        </Link>
                                        <Link href="https://tmnyoni.ml">
                                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                                <GlobeAltIcon className="inline h-6 w-6" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;
