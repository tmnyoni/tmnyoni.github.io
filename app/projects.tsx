import Project from "./project";

interface IProject {
  title: string;
  imageUrl: string;
  description: string;
  sourceUrl: string;
}

export default function Projects() {
  const projects: IProject[] = [
    {
      title: "Lecui User Interface Builder",
      imageUrl: "/assets/images/lecui.jpeg",
      description:
        "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
      sourceUrl: "https:github.com/alecmus/lecui",
    },
    {
      title: "Lecui User Interface Builder",
      imageUrl: "/assets/images/lecui.jpeg",
      description:
        "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
      sourceUrl: "https:github.com/alecmus/lecui",
    },
    {
      title: "Lecui User Interface Builder",
      imageUrl: "/assets/images/lecui.jpeg",
      description:
        "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
      sourceUrl: "https:github.com/alecmus/lecui",
    },
    {
      title: "Lecui User Interface Builder",
      imageUrl: "/assets/images/lecui.jpeg",
      description:
        "I am an active contributor to the lecui C++ Library, which is used to create user interfaces using modern C++.",
      sourceUrl: "https:github.com/alecmus/lecui",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-16">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          description={project.description}
          sourceUrl={project.sourceUrl}
        />
      ))}
    </div>
  );
}
