import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error404 from '../templates/Private/Error404'
import NavApp from '../NavBar/NavApp'
import Biblioteca from '../templates/Private/Biblioteca'
import Favoritos from '../templates/Private/Favoritos'
import Inicio from '../templates/Private/Inicio'

function Router2() {
    return (
        <>
            <NavApp />
            <Routes>
                <Route path='biblioteca' element={
                    <Biblioteca/>
                } />
                <Route path='favoritos' element={
                    <Favoritos/>
                } />
                <Route path='inicio' element={
                    <Inicio/>
                } />
                <Route path='/' element={
                    <Navigate to='biblioteca'/>
                } />
                <Route path='/*' element={
                    <Error404 />
                } />
            </Routes>
        </>
    )
}

export default Router2