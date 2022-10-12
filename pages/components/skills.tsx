import {
    ArrowPathIcon,
    CommandLineIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    CursorArrowRaysIcon,
    Cog6ToothIcon,
    ChatBubbleLeftEllipsisIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const SkillsSection = () => {
    return (
        <section>
            <div className="container mx-auto pt-10">
                <div className="text-center flex flex-col items-center">
                    <h1 className="max-w-xl text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                        My Top Skills
                    </h1>
                    <p className="w-96 text-center text-sm text-gray-400 mt-3">
                        I know you have trust issues, so listen to what others have to say about me.
                    </p>
                </div>

                <div className="mx-2 my-16">
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
        </section>
    )
}

export default SkillsSection;