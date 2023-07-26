import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavWelcome.module.css'

function NavWelcome() {
  return (
    <>
    <header className={styles.header}>
        <nav>
            <NavLink to='#'>Productos</NavLink>
            <NavLink to='#'>Otros</NavLink>
            <NavLink to='#'>Ventas</NavLink>
            <NavLink to='login'>Iniciar Sesion</NavLink>
            <NavLink to='register'>Registrate</NavLink>
        </nav>
    </header>
    </>
  )
}

export default NavWelcome