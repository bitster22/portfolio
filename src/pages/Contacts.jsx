import { ContactOptionsSection } from "../components/ContactOptionsSection"

export const Contacts = () =>{
    return(
        <main className=" text-gray-200 max-w-6xl mx-auto flex justify-between items-center p-8 my-10">
            <h2 className=" w-2/5 text-3xl"><span className=" text-indigo-500">Entre em contato comigo</span> por um dos meios ao lado</h2>
            <ContactOptionsSection/>
        </main>
    )
}