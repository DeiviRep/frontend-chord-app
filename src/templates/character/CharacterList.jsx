import React, { useEffect, useState } from 'react'
import Character from './Character';

const NavPage = ({ page, cambiarAtras, cambiarSiguiente }) => {
    return (
        <header className='d-flex justify-content-between'>
            <p>Page: {page}</p>
            <div className='d-flex justify-content-betweens'>
                <button className='btn btn-primary btn-sm' onClick={cambiarAtras}>atras</button>
                <button className='btn btn-primary btn-sm' onClick={cambiarSiguiente}>siguiente</button>
            </div>
        </header>
    )
}

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const cambiarAtras = () => {
        setLoading(true)
        setPage(page - 1)
    }
    const cambiarSiguiente = () => {
        setLoading(true)
        setPage(page + 1)
    }
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setCharacters(data.results);
            setLoading(false)
        }
        fetchData();
    }, [page]);

    return (
        <div className='container'>
            <NavPage page={page} cambiarAtras={cambiarAtras} cambiarSiguiente={cambiarSiguiente} />
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className='row'>
                        {characters.map((character) => {
                            return (
                                <div className='col-md-4' key={character.id}>
                                    <Character character={character} />
                                </div>
                            );
                        })}
                    </div>
                )
            }
            <NavPage page={page} cambiarAtras={cambiarAtras} cambiarSiguiente={cambiarSiguiente} />
        </div>
    )
}

export default CharacterList