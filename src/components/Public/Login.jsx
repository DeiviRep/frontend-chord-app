import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../../context/Contexto';
// import { Title, Container } from './styles-in-js/Login.styles';
import { Button } from './styles-in-js/Button.styles';
import { Div } from './styles-in-js/Welcome.styles';
import styles from './styles-modules/Login.module.css'

const MyButon = ({ accion, name }) => {
  return (
    <button className={styles.button} onClick={accion}>
      {name}
    </button>
  )
}

const nombres = {
  login: 'Login',
  register: 'Registrate'
}

function Login() {
  const { logearme } = useContext(Contexto)
  const navegacion = useNavigate();
  const login = () => {
    navegacion('/', { replace: true })
    // const input = document.querySelector('.input')
    const nameUser = 'input.value';
    logearme(nameUser)
  }
  const register = () => {
    navegacion('/register', { replace: true })
  }
  return (
    <>
      <Div >
        <h1>Login</h1>
        <MyButon accion={login} name={nombres.login} />
        <MyButon accion={register} name={nombres.register} />
      </Div>
    </>
  )
}

export default Login