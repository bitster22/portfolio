import { FaWhatsapp, FaLinkedin} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export const ContactOptionsSection = () =>{
    return(
        <ul className=" lg:w-2/5 w-3/4 p-2 flex flex-col gap-8">
            <li className=" flex gap-8 items-center">
                <div className=" bg-green-500 p-6 rounded-md">
                    <FaWhatsapp size="1.5rem"/>
                </div>
                <div className=" flex flex-col gap-3">
                    <h3 className=" text-lg">Whatsapp</h3>
                    <p className=" text-sm text-gray-500">Estou disponível, me envie uma mensagem!</p>
                    <a href="https://wa.me/5521985643871" className=" text-sm hover:text-green-300">Mandar mensagem</a>
                </div>
            </li>
            <li className=" flex gap-8 items-center">
                <div className=" bg-red-500 p-6 rounded-md">
                    <MdOutlineEmail size="1.5rem"/>
                </div>
                <div className=" flex flex-col gap-3">
                    <h3 className=" text-lg">Email</h3>
                    <p className=" text-sm text-gray-500">Me envie um email!</p>
                    <a href="mailto:alvaro.a.p.r.s@gmail.com" className=" text-sm hover:text-red-300">Enviar Email</a>
                </div>
            </li>
            <li className=" flex gap-8 items-center">
                <div className=" bg-blue-400 p-6 rounded-md">
                    <FaLinkedin size="1.5rem"/>
                </div>
                <div className=" flex flex-col gap-3">
                    <h3 className=" text-lg">Linkedin</h3>
                    <p className=" text-sm text-gray-500">Meu linkedin, me adicione ou mande uma mensagem</p>
                    <a href="https://www.linkedin.com/in/alvaro-paiva-dos-reis-s%C3%A1-a032991b5/" target="_blank" rel="noreferrer" className=" text-sm hover:text-blue-300">Linkedin</a>
                </div>
            </li>
        </ul>
    )
}