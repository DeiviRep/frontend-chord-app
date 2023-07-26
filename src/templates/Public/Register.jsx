import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../../context/Contexto'
import { Button, Div } from './styles-in-js/Register.styles'
import Buton from '../../components/Buton'

function Register() {
  const { logearme } = useContext(Contexto)
  const navegacion = useNavigate()
  const aceptar = () => {
    navegacion('/', { replace: true })
    logearme('David Patzi')
  }
  return (
    <>
      <Div>
        <h1>Register</h1>
        <Buton accion={aceptar} name={'Aceptar'} />
      </Div>
    </>

  )
}

export default Register