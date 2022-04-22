import React, { useEffect, useState } from 'react';
import Card from './Card';

function SearchCharacter() {
    
    const [characters, setCharacters] = useState([]);
    
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters();
    }, [])

    function findCharacters(e){
        setCharacters([]);
        const tempChr = []
        let text = e.target.value;
        
        if (text === ""){
            return;
        }
        
        for(let character of allCharacters){

            if (character.name.startsWith(text)){
                tempChr.push(character);
            }

        }
        setCharacters(tempChr);
    } 

    async function getAllCharacters(){

        let cont = 1;
        const tempAllChr = []
        while(cont <= 826){

            const dataJson = await fetch("https://rickandmortyapi.com/api/character/" + cont);
            const characterJson = await dataJson.json();
            // allCharacters.push(characterJson);
            tempAllChr.push(characterJson);
            setAllCharacters(tempAllChr);
            // console.log(characterJson);
            cont++;
        }

    }

    
    
    return <>
        <div className='contenedor'>

            <div className='title'>
                <span>Search Character</span>
            </div>
            <br/>
            <input type = "text" id = "character" name = "character" className='textInput' onChange={findCharacters}/>
            
            <div className='contentCards'>
                {
                    characters.map(chr => <Card data = {chr}/>)
                }
            </div>

            

        </div>
    </>

}


export default SearchCharacter



