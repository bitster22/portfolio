import { Link } from "react-router-dom"
import { FaGithub, FaHtml5, FaCss3Alt, FaNode, FaReact, FaPython} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export const ProjectsSection = () =>{
    return(
        <section className=" flex flex-col gap-4">
            <h2 className=" text-4xl text-red-400 font-medium">Meus projetos</h2>
            <span className="font-medium text-lg text-gray-500">Clique para ver meus projetos front-end e back-end criados na Kenzie utilizando as tecnologias abaixo</span>
            <div className=" flex gap-4 items-center mb-8">
                <Link to="/projects" className=" bg-purple-800 hover:bg-purple-500 p-2 px-4 rounded-lg">Ver Projetos</Link>
                <a href="https://github.com/bitster22" target="_blank" className=" p-4 bg-white rounded-full" rel="noreferrer"><FaGithub color="#000000"/></a>
            </div>
            <div className=" flex gap-4 items-center overflow-x-auto" >
                <FaHtml5 size="4rem"/>
                <FaCss3Alt size="4rem"/>
                <RiJavascriptFill size="4rem"/>
                <FaReact size="4rem"/>
                <FaNode size="4rem"/>
                <FaPython size="4rem"/>
            </div>
        </section>
    )
}