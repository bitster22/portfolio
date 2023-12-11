import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" bg-gray-950 font-inter px-4">
      <div className=" max-w-4xl mx-auto py-4 text-gray-200 flex justify-between gap-4">
        <h1 className=" font-bold text-2xl">Alvaro</h1>
        <div className=" gap-4 items-center text-gray-400 font-medium hidden md:flex">
          <Link to="/" className=" hover:text-gray-200">
            Home
          </Link>
          <Link to="/projects" className=" hover:text-gray-200">
            Projetos
          </Link>
          <Link to="/contacts" className=" hover:text-gray-200">
            Contatos
          </Link>
        </div>
        <button className="space-y-1 group md:hidden">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>

          <div className=" bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <Link
              to="/"
              className="flex justify-center w-full py-4 hover:bg-[#202020]"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="flex justify-center w-full py-4 hover:bg-[#202020]"
            >
              Projetos
            </Link>
            <Link
              to="/contacts"
              className="flex justify-center w-full py-4 hover:bg-[#202020]"
            >
              Contatos
            </Link>
          </div>
        </button>
      </div>
    </header>
  );
};
