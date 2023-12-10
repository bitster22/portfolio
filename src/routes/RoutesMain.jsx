import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Contacts } from "../pages/Contacts"

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    )
}