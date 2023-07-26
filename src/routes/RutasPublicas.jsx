import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

function RutasPublicas({ children }) {
    const { estado } = useContext(Contexto)
    return (estado) ? <Navigate to='/biblioteca' /> : children
}

export default RutasPublicas