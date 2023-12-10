import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <header className=" bg-gray-950 font-inter">
            <div className=" max-w-4xl mx-auto py-4 text-gray-200 flex justify-between gap-4">
                <h1 className=" font-bold text-2xl">Alvaro</h1>
                <div className=" flex gap-4 items-center text-gray-400 font-medium">
                    <Link to="/" className=" hover:text-gray-200">Home</Link>
                    <Link to="/projects" className=" hover:text-gray-200">Projetos</Link>
                    <Link to="/contacts" className=" hover:text-gray-200">Contatos</Link>
                </div>
            </div>
        </header>
    )
}