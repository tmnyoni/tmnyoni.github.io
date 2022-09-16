import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, GlobeAltIcon, BugAntIcon, ChatBubbleBottomCenterTextIcon, ArrowPathIcon, CommandLineIcon, AcademicCapIcon, BriefcaseIcon, CursorArrowRaysIcon, Cog6ToothIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { NextPageWithLayout } from './_app';
import Layout from "./components/layout";

const Home: NextPageWithLayout = () => {
    return (
        <div>
            <div className="container m-auto">
                <div className="max-w-2xl mx-2 md:mx-10 mt-12">
                    <div className="rounded-l-full mb-6">
                        <Image src={"/assets/hero-image.jpg"} width={60} height={60} alt="bobo"
                            className="rounded-full"
                        />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                        Software engineer, developer and ui & ux designer
                    </h1>
                    <p className="mt-8 text-zinc-700">
                        I am Tawanda M, a passionate software developer, engineer and ui & ux based in Zimbabwe,
                        who is inspired to change the world through technological solutions. I am an active research,
                        being eager to know the cutting edge technology to make development easier.
                    </p>
                    <div className="flex items-center mt-8">
                        <Link href="contact">
                            <a className="border rounded-full mr-2 px-6 py-2 text-sm font-semibold">
                                Contact me <PhoneIcon className="w-6 h-4 ml-2  inline-block transform -rotate-180" />
                            </a>
                        </Link>
                        <Link href="https://github.com/tmnyoni">
                            <a className="ml-3 text-slate-600 w-8 h-8 p-1 flex items-center justify-center">
                                <ChatBubbleBottomCenterTextIcon className="inline w-6 h-6" />
                            </a>
                        </Link>
                        <Link href="https://linkedin/in/tmnyoni">
                            <a className="ml-3 text-slate-600 w-8 h-8 p-1 flex items-center justify-center">
                                <BugAntIcon className="inline w-6 h-6" />
                            </a>
                        </Link>
                        <Link href="https://tmnyoni.ml">
                            <a className="ml-3 text-slate-600 w-8 h-8 p-1 flex items-center justify-center">
                                <GlobeAltIcon className="inline w-6 h-6" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="container mx-auto">
                    <div className="mx-2 md:mx-10 py-10 text-4xl font-extrabold">
                        <div className="flex align-center justify-between">
                            <h1>
                                TypeScript
                            </h1>
                            <h1>
                                JavaScript
                            </h1>
                            <h1>
                                ReactJS
                            </h1>
                            <h1>
                                Next.JS
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/**
             * Skills and Projects.
             */}
            <div>
                <div className="container mx-auto">
                    <div className="mx-2 md:mx-10 my-10">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="md:col-span-2 grid grid-cols-1 gap-4">
                                <div className="py-8 px-6 rounded-xl hover:bg-gray-50">
                                    <ArrowPathIcon className="inline w-6 h-6 text-slate-500" />
                                    <h1 className="text-sm font-semibold ml-3 inline-block text-slate-800">
                                        Plan, Execute, Iterate
                                    </h1>
                                    <p className="text-sm mt-3 text-gray-800">
                                        I work out a good plan for my project, and execute
                                        my plan and make improvements. That&apos;s what I do everyday.
                                    </p>
                                </div>
                                <div className="py-8 px-6 rounded-xl hover:bg-gray-50">
                                    <CommandLineIcon className="inline w-6 h-6 text-slate-500" />
                                    <h1 className="text-sm font-semibold ml-3 inline-block text-slate-800">
                                        Eat, Code, Sleep, Repeat
                                    </h1>
                                    <p className="text-sm mt-3 text-gray-800">
                                        I am a professional passionate programmer with unquestionable
                                        knowledge across many langauges in the industry, willing to learn
                                        more and better tools.
                                    </p>
                                </div>
                                <div className="py-8 px-6 rounded-xl hover:bg-gray-50">
                                    <AcademicCapIcon className="inline w-6 h-6 text-slate-500" />
                                    <h1 className="text-sm font-semibold ml-3 inline-block text-slate-800">
                                        Research, Practice, Research Again
                                    </h1>
                                    <p className="text-sm mt-3 text-gray-800">
                                        I never stop learning, because I get to learn new things that
                                        are so important in my stake and get to know new cutting edge
                                        technology.
                                    </p>
                                </div>
                                <div className="py-8 px-6 rounded-xl hover:bg-gray-50">
                                    <ChatBubbleLeftEllipsisIcon className="inline w-6 h-6 text-slate-500" />
                                    <h1 className="text-sm font-semibold ml-3 inline-block text-slate-800">
                                        Communicate, Team-player, Collaborate
                                    </h1>
                                    <p className="text-sm mt-3 text-gray-800">
                                        I work with people and people work with me and I have
                                        partook in great projects. All I can say there is power in unit,
                                        especially when communication is good.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="rounded-xl border mt-8 px-3 py-5">
                                    <BriefcaseIcon className="inline w-6 h-6 text-slate-500" />
                                    <h4 className="text-sm font-semibold inline-block text-slate-800 ml-3">
                                        Projects
                                    </h4>

                                    <div className="mt-3 py-3">
                                        <CursorArrowRaysIcon className="inline w-6 h-6 text-slate-500" />
                                        <h4 className="text-sm font-semibold inline-block text-slate-800 ml-3">
                                            Lecui User Interface Library
                                        </h4>
                                        <p className="text-sm mt-3 text-gray-800">
                                            I am an active contributor to the lecui C++ Library
                                            for building User Interface using the modern C++.
                                        </p>
                                        <Link href="https://github.com/alecmus/lecui">
                                            <a className="text-sm text-gray-500 hover:text-gray-700">
                                                Check it out
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="mt-1 py-3">
                                        <Cog6ToothIcon className="inline w-6 h-6 text-slate-500" />
                                        <h4 className="text-sm font-semibold inline-block text-slate-800 ml-3">
                                            Automated Fault Report System
                                        </h4>
                                        <p className="text-sm mt-3 text-gray-800">
                                            I am an lead developer on the team of 2 developing
                                            the Automated Fault Support System built using Django.
                                        </p>
                                        <Link href="https://github.com/qhelie/afss">
                                            <a className="text-sm text-gray-500 hover:text-gray-700">
                                                Check it out
                                            </a>
                                        </Link>
                                    </div>

                                    <Link href="projects">
                                        <a className="text-sm text-gray-500 hover:text-gray-700">
                                            Check out more
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
                    <div className="mx-2 md:mx-10 my-10">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl max-w-xl">
                            I know you got trust issues, so hear what other people say about me
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mx-2 md:mx-10 my-12">
                        <div className="py-6 px-4 rounded-md bg-gray-100">
                            <div className="flex items-center">
                                <Image src={"/assets/hero-image.jpg"} width={45} height={45} alt="bobo"
                                    className="rounded-full inline-block"
                                />
                                <div className="inline-block ml-4">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Alec Musasa
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        CEO & Founder of Leafsoft
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-800 mt-6">
                                This guy is a true genius, Its been a pleasure
                                working with him. He is a young ambious developer.
                            </p>
                        </div>
                        <div className="py-6 px-4 rounded-md bg-gray-100">
                            <div className="flex items-center">
                                <Image src={"/assets/hero-image.jpg"} width={45} height={45} alt="bobo"
                                    className="rounded-full inline-block"
                                />
                                <div className="inline-block ml-4">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Alec Musasa
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        CEO & Founder of Leafsoft
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-800 mt-6">
                                This guy is a true genius, Its been a pleasure
                                working with him. He is a young ambious developer.
                            </p>
                        </div>
                        <div className="py-6 px-4 rounded-md bg-gray-100">
                            <div className="flex items-center">
                                <Image src={"/assets/hero-image.jpg"} width={45} height={45} alt="bobo"
                                    className="rounded-full inline-block"
                                />
                                <div className="inline-block ml-4">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Alec Musasa
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        CEO & Founder of Leafsoft
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-800 mt-6">
                                This guy is a true genius, Its been a pleasure
                                working with him. He is a young ambious developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mx-auto">
                    <div className="mx-2 md:mx-10 my-10">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="py-1 px-2">
                                <Image src="/assets/hero-image.jpg" width={400} height={400} alt="me-on-laptop" />
                            </div>
                            <div>
                                <h5> Hi there, I&apos;m Tawanda M. Nyoni </h5>
                                <h3 className="mt-2 text-4xl font-light">
                                    Software Developer, Engineer Based in Zimbabwe
                                </h3>
                                <p className="text-base text-slate-800 mt-6">
                                    I am a highly motivated IT enthusiast prepared to offer
                                    everything I have to any venture. My main area of expertise
                                    is web development. But I&apos;m not only a web developer;
                                    occasion, I also make desktop and mobile applications.
                                    Creativity and innovation are important to me.
                                </p>
                                <p className="text-base text-slate-800 mt-6">
                                    My life goal is to use technology to improve the human society. So I spend the most
                                    of my time studying about new technology on the market and how
                                    they may benefit human civilization.
                                </p>
                                <p className="text-base text-slate-800 mt-6">
                                    In my leisure time, I enjoy learning new programming techniques
                                    as well as enjoying video games. Which is what I usually do when
                                    I&apos;m bored. I enjoy open-world computer games such as COD and
                                    others. COD is my favorite game.
                                </p>
                                <div className="flex items-center mt-5 text-slate-500">
                                    Find me on:
                                    <div className="inline-flex items-center">
                                        <Link href="https://github.com/tmnyoni">
                                            <a className="ml-3 text-slate-600 w-8 h-8 p-1 flex items-center justify-center">
                                                <ChatBubbleBottomCenterTextIcon className="inline w-6 h-6" />
                                            </a>
                                        </Link>
                                        <Link href="https://linkedin/in/tmnyoni">
                                            <a className="ml-3 text-slate-600 w-8 h-8 p-1 flex items-center justify-center">
                                                <BugAntIcon className="inline w-6 h-6" />
                                            </a>
                                        </Link>
                                        <Link href="https://tmnyoni.ml">
                                            <a className="ml-3 text-slate-600 w-8 h-8 p-1 flex items-center justify-center">
                                                <GlobeAltIcon className="inline w-6 h-6" />
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
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home;