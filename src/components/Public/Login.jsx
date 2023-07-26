import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../../context/Contexto';
// import { Title, Container } from './styles-in-js/Login.styles';
import { Button } from './styles-in-js/Button.styles';
import { Div } from './styles-in-js/Welcome.styles';

// // Define los estilos utilizando CSS-in-JS
// const Container = styled.div`
//   background-color: #f1f1f1;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   color: #333;
// `;

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
        <Button onClick={login}>Login</Button>
        <Button onClick={register}>Register</Button>
        {/* <Container>
          <Title>Título del componente</Title>
          <p>Contenido del componente...</p>
        </Container> */}
      </Div>
    </>
  )
}

export default Login