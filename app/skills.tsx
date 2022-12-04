import {
    ArrowPathIcon,
    CommandLineIcon,
    AcademicCapIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";


interface Skill {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Skill = ({ icon, title, description }: Skill): JSX.Element => {
    return (
        <div className="rounded-md border border-gray-100 py-8 px-6 hover:bg-gray-50">
            {icon}
            <h1 className="ml-3 inline-block font-medium text-gray-800">
                {title}
            </h1>
            <p className="mt-3 text-gray-800">
                {description}
            </p>
        </div>
    )
}

const SkillsSection = () => {
    return (
        <section>
            <div className="container mx-auto pt-10">
                <div className="text-center flex flex-col items-center">
                    <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                        My Top Skills
                    </h1>
                    <p className="w-96 text-center text-sm text-gray-400 mt-3">
                        These are the attributes that makes me unique from other developers
                    </p>
                </div>

                <div className="mx-2 my-12 md:my-16">
                    <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-4">
                        <Skill
                            icon={<ArrowPathIcon className="inline h-6 w-6 text-gray-500" />}
                            title={"Plan, Execute, Iterate"}
                            description={"I devise a plan for my project, carry it out, and then repeat the procedure. That is what I do on a daily basis."}
                        />

                        <Skill
                            icon={<CommandLineIcon className="inline h-6 w-6 text-gray-500" />}
                            title={"Eat, Code, Sleep, Repeat"}
                            description={"I am a professional, passionate programmer who writes code every day with the goal of making the world a better place using my skills."}
                        />

                        <Skill
                            icon={<AcademicCapIcon className="inline h-6 w-6 text-gray-500" />}
                            title={"Research, Practice, Research Again"}
                            description={`I never stop learning because I get to study new topics that are vital to my field
                                 and become acquainted with cutting-edge technologies.`}
                        />

                        <Skill
                            icon={<ChatBubbleLeftEllipsisIcon className="inline h-6 w-6 text-gray-500" />}
                            title={"Communicate, Collaborate"}
                            description={`
                            I collaborate with others, and I&apos;ve 
                            been a part of some exciting projects. All I
                                can say is that there is strength in numbers, especially when
                                communication is effective.
                                `}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;