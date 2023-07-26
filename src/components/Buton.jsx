import React from 'react'
import styles from './styles-modules/Login.module.css'
const Buton = ({ accion, name }) => {
  return (
    <button className={styles.button} onClick={accion}>
      {name}
    </button>
  )
}

export default Buton