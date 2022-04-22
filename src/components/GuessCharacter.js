import React, { useEffect, useState } from 'react';
import Card from './Card';

//TODO Juego de adivinanza con las cartas de personajes

function GuessCharacter() {

    const [character, setCharacter] = useState(null);

    

    useEffect(() => {
        getCharacter();
    }, [])



    async function getCharacter() {

        const numRandom = Math.floor((Math.random() * (826 - 1 + 1)) + 1);

        const apiRequest = await fetch("https://rickandmortyapi.com/api/character/" + numRandom);
        const characterJson = await apiRequest.json();

        setCharacter(characterJson);
    }


    if (character === null) return null;

    return <>
        <div className='contenedor'>
            <div className='title'>
                <span>Guess Character</span>
            </div>
            <br/>
            <input type="button" id="random" name="random" className='button' value="Random" onClick={getCharacter} />

            <Card data={character} />

        </div>
    </>
}

export default GuessCharacter;

