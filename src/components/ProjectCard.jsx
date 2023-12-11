/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
export const ProjectCard = ({ project }) => {
  return (
    <li className=" w-[30rem] flex flex-col gap-2 border-2 rounded-md p-4 border-gray-400">
      <h2 className=" text-gray-50 text-2xl">{project.name}</h2>
      <div className=" flex gap-4 text-xs items-center">
        <span className=" text-base">Linguagem: </span>
        <span className=" text-yellow-400">{project.language}</span>
      </div>
      <p className=" text-gray-400">{project.description}</p>
      <div className=" flex gap-4">
        <div className=" flex text-purple-500 gap-2 items-center">
          <FaGithub />
          <a
            href={project.github_link}
            className=" border-b border-[transparent] hover:border-white"
          >
            Repositório
          </a>
        </div>
        {project.vercel_link != "" ? (
          <div className=" flex text-orange-400 gap-1 items-center">
            <IoArrowRedoOutline />
            <a
              href={project.vercel_link}
              className="border-b border-[transparent] hover:border-white"
            >
              Aplicação
            </a>
          </div>
        ) : null}
      </div>
    </li>
  );
};
