import { ProjectList } from "../components/ProjectList";

export const Projects = () => {
  return (
    <main className="max-w-6xl mx-auto p-8 text-gray-500">
      <div className=" flex flex-col gap-2">
        <h2 className=" text-2xl text-gray-200">Meus Projetos</h2>
        <span className=" text-sm">
          {" "}
          Projetos criados na{" "}
          <span className=" text-red-400">Kenzie Academy</span>
        </span>
      </div>
      <ProjectList />
    </main>
  );
};
