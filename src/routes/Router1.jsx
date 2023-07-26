import Login from '../templates/Public/Login'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../templates/Public/Register'
import RutasPublicas from './RutasPublicas'
import RutasPrivadas from './RutasPrivadas'
import Router2 from './Router2'
import Welcome from '../templates/Public/Welcome'
import NavWelcome from '../NavBar/NavWelcome'

function Router1() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <RutasPublicas>
                        <>
                            <section className='seccion-Welcome'>
                                <NavWelcome />
                                <Welcome />
                            </section>
                        </>
                    </RutasPublicas>
                } />
                <Route path='login' element={
                    <RutasPublicas>
                        <Login />
                    </RutasPublicas>
                } />
                <Route path='register' element={
                    <RutasPublicas>
                        <Register />
                    </RutasPublicas>
                } />
                <Route path='/*' element={
                    <RutasPrivadas>
                        <Router2 />
                    </RutasPrivadas>
                } />
            </Routes>
        </>
    )
}

export default Router1