import React from 'react'
import styles from './styles-modules/Inicio.module.css'

function Inicio() {
  return (
    <>
    <h1>Inicio</h1>
    <div className={styles.container}>
        <h1 className={styles.title}>Título del componente</h1>
        <p>Contenido del componente...</p>
      </div>
    </>
  )
}

export default Inicio