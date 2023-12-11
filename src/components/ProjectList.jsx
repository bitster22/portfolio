import { repositories_back, repositories_front } from "../data/repositories";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  return (
    <div className=" flex flex-col gap-4 mt-4">
      <h2 className=" text-green-600 text-2xl">Back-end</h2>
      <ul className=" flex gap-8 flex-wrap justify-between">
        {repositories_back.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
      <h2 className=" text-blue-500 text-2xl">Front-end</h2>
      <ul className=" flex gap-6 flex-wrap justify-between">
        {repositories_front.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
};
