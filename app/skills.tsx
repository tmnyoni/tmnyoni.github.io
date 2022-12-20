import {
  ArrowPathIcon,
  CommandLineIcon,
  AcademicCapIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function SkillsSection() {
  const skills = [
    {
      icon: ArrowPathIcon,
      title: "Plan, Execute, Iterate",
      description:
        "I devise a schedule for my project, execute it, and then repeat the process. That is exactly what I do every day.",
    },
    {
      icon: CommandLineIcon,
      title: "Eat, Code, Sleep, Repeat",
      description:
        "I am a gifted, dedicated programmer who codes with the intention of using my abilities to improve the world.",
    },
    {
      icon: AcademicCapIcon,
      title: "Research, Practice, Research Again",
      description:
        "I never stop learning because I get to learn about new and vital topics and become acquainted with cutting-edge technologies.",
    },
    {
      icon: ChatBubbleLeftEllipsisIcon,
      title: "Communicate, Collaborate",
      description:
        "I collaborate with others and have taken part in a number of exciting projects. When communication is efficient, there is strength in numbers.",
    },
  ];

  return (
    <React.Fragment>
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="rounded-md border border-gray-100 py-8 px-6 hover:bg-gray-50"
        >
          <span>
            <skill.icon className="inline h-6 w-6 text-gray-500" />
          </span>
          <h1 className="ml-3 inline-block font-medium text-gray-800">
            {skill.title}
          </h1>
          <p className="mt-3 text-gray-800 text-sm">{skill.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
}
