import React, { useReducer } from 'react'
import miReducer from './miReducer'
import types from './types'
import Contexto from './Contexto'


//inicio La pagina y se puso estado false
const init_welcome = () => {
    const valor = localStorage.getItem("estado")
    return {
        estado: !!valor
    }
}
//fin init
function Provider({ children }) {

    //operaciones
    const [logeado, dispach] = useReducer(miReducer, {}, init_welcome)

    const logearme = (user = 'David Ingreso') => {
        const action_login = {
            type: types.login
        }
        localStorage.setItem("estado", true)
        dispach(action_login)
    }

    const deslogearme = () => {
        const action_logout = {
            type: types.logout
        }
        localStorage.removeItem("estado")
        dispach(action_logout)
    }
    return (
        <>
            <Contexto.Provider value={{
                ...logeado,
                logearme,
                deslogearme,
            }}>
                {children}
            </Contexto.Provider>
        </>
    )
}

export default Provider