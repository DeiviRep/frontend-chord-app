import styles from './styles-modules/Biblioteca.module.css'
import CharacterList from '../character/CharacterList'

function Biblioteca() {
  return (
    <>
      <h1>Biblioteca</h1>
      <div className={styles.container}>
        <h1 className={styles.title}>Título del componente</h1>
        <p>Contenido del componente...</p>
      </div>
      <CharacterList />
    </>
  )
}

export default Biblioteca