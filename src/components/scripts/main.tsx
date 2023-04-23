import React from "react"

import Institucional from "../../pages/Institucional";
import {Routes,Route} from "react-router-dom"

const Main = () => {
    return (
        <main >
            <Routes>
                <Route path="/" element={<Institucional />}/>
                <Route path="/saibamais" element={<div><h1>Página desativada</h1></div>}/>
                <Route path="/Cursos" element={<div><h1>Em breve os Cursos estarão disponiveis</h1></div>}/>
                <Route path="/Institucional/:id" element={<Institucional />}/>
                <Route path="/Institucional" element={<Institucional />}/>
                <Route path="/Institucional/about" element={<Institucional />}/>
                <Route path="/Institucional/contact" element={<Institucional />}/>
            </Routes>
        </main>
    )
};



export default  Main