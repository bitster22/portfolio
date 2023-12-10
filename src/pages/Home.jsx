import { AboutMe } from "../components/AboutMe"
import { ProjectsSection } from "../components/ProjectsSection"

export const Home = () =>{
    return(
        <main className=" font-inter text-gray-200 max-w-4xl mx-auto flex flex-col gap-8 p-16">
            <h2 className=" text-xl">Olá, meu nome é <span className=" text-blue-500">Alvaro</span></h2>
            <AboutMe/>
            <ProjectsSection/>
        </main>
    )
}