import { Route, Routes } from "react-router-dom"
import { HomePage } from "../HomePage/HomePage"
import { SinglePhoto } from "../SinglePhoto/SinglePhoto"





export  const CustomRoute = () => {
    return (
        <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/:id" element={<SinglePhoto/>}/>

        </Routes>
    )
}