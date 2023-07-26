import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto';
import styles from './NavApp.module.css'
import styled from 'styled-components';
// Define los estilos utilizando CSS-in-JS
export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

function NavApp() {
    const navegacion = useNavigate();
    const { deslogearme } = useContext(Contexto)
    const login = () => {
        navegacion('/login', { replace: true })
        deslogearme();
    }
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <NavLink to='biblioteca'>
                        Biblioteca
                    </NavLink>
                    <NavLink to='favoritos'>
                        Faboritos
                    </NavLink>
                    <NavLink to='inicio'>
                        Inicio
                    </NavLink>
                    <Button primary onClick={login}>Logout</Button>
                </nav>
            </header>
        </>
    )
}

export default NavApp