import React, { useEffect, useState } from 'react';
import Card from './Card';

function SearchCharacter() {
    
    const [characters, setCharacters] = useState([]);
    
    const [allCharacters, setAllCharacters] = useState([]);

    const [tempCharacters, setTempCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters();
    }, [])

    function capitalize(text){

        const words = text.split(" ");
        
        for (let word of words ){
            // console.log(words[word]);
            let newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
            words[words.indexOf(word)] = newWord;
        }
        return words.join(" ");

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

    function findCharacters(e){
        setCharacters([]);
        setTempCharacters([]);
        // console.log(tempCharacters);
        const tempChr = []
        let text = e.target.value;
        
        if (text === ""){
            return;
        }
        
        for(let character of allCharacters){

            if (character.name.startsWith(capitalize(text))){
                tempChr.push(character);
            }

        }
        setCharacters(tempChr);
        findGroupCharacters(null, tempChr, []);
    } 

    function findGroupCharacters(e, characters, groupCharacters = tempCharacters){
        
        //Id del último personaje mostrado dentro de los personajes filtrados por lo escrito en el input
        let lastIndexId;
        if (groupCharacters.length > 0){
            lastIndexId = groupCharacters.length;
            // console.log(characters);
            // console.log(lastIndexId);
            // console.log(tempCharacters[tempCharacters.length-1]);
        } else{
            lastIndexId = 0;
        }
        const tempChr = [];
        for (let i = lastIndexId; i <= (lastIndexId+7 > characters.length-1 ? characters.length-1 : lastIndexId+7); i++){
            if (characters[i] === undefined) break;
            tempChr.push(characters[i]);

        }
        
        setTempCharacters([...groupCharacters, ...tempChr]);

        // console.log([...tempCharacters, ...tempChr]);
    }



    // console.log("Oeq");
    
    return <>
        <div className='contenedor'>

            <div className='title'>
                <span>Search Character</span>
            </div>
            <br/>
            <input type = "text" id = "character" name = "character" className='textInput' onChange={findCharacters}/>
            
            <div className='contentCards'>
                {
                    tempCharacters.map(chr => <Card data = {chr}/>)
                }
            </div>

            <br/>
            
            {
                tempCharacters.length === characters.length ?
                null :
                <input type="button" id="random" name="random" className='button' value="Cargar Más" onClick={e => findGroupCharacters(e, characters)}/>
            }

            

            <br/>

        </div>
    </>

}


export default SearchCharacter



