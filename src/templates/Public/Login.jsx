import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../../context/Contexto';
// import { Title, Container } from './styles-in-js/Login.styles';
import { Div } from './styles-in-js/Welcome.styles';
import Buton from '../../components/Buton';

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
        <Buton accion={login} name={nombres.login} />
        <Buton accion={register} name={nombres.register} />
      </Div>
    </>
  )
}

export default Login