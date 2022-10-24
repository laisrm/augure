import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AbrePage from '../pages/AbrePage/AbrePage'
import CuriosidadesPage from '../pages/CuriosidadesPage/CuriosidadesPage'
import ComoJogar from '../pages/ComoJogarPage/ComoJogarPage'
import HomePage from '../pages/HomePage/HomePage'
import OrigemPage from '../pages/OrigemPage/OrigemPage'

export const Router = () => {
    return(
    <BrowserRouter>
    <Routes>
    <Route index element = {<AbrePage/>}/>
    <Route path= "como-jogar" element = {<ComoJogar/>}/>
    <Route path= "tirar-cartas" element = {<HomePage/>}/>
    <Route path= "curiosidades" element = {<CuriosidadesPage/>}/>
    <Route path= "origem" element = {<OrigemPage/>}/>
    </Routes>
    </BrowserRouter>
    )
}

