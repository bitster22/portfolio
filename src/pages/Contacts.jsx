import { ContactOptionsSection } from "../components/ContactOptionsSection"

export const Contacts = () =>{
    return(
        <main className=" text-gray-200 max-w-6xl mx-auto flex lg:flex-row flex-col gap-4 justify-between items-center lg:p-8 p-1 my-10">
            <h2 className=" lg:w-2/5 w-3/4 text-3xl"><span className=" text-indigo-500">Entre em contato comigo</span> por um dos meios disponíveis!</h2>
            <ContactOptionsSection/>
        </main>
    )
}