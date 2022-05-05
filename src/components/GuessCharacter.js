import React, { useEffect, useState } from 'react';
import Card from './Card';
import Modal from './Modal';

//TODO Juego de adivinanza con las cartas de personajes

function GuessCharacter() {

    const [character, setCharacter] = useState(null);

    const [options, setOptions] = useState([]);

    const [result, setResult] = useState(null);

    useEffect(() => {
        getCharacter();
    }, [])



    async function getCharacter() {
        const numRandom = Math.floor((Math.random() * (826 - 1 + 1)) + 1);

        const apiRequest = await fetch("https://rickandmortyapi.com/api/character/" + numRandom);
        const characterJson = await apiRequest.json();
        
        setCharacter(characterJson);
        const tempOptions = [];
        tempOptions.push(characterJson);
        loadOptions(tempOptions);

    }

    async function loadOptions(tempOptions) {
        // console.log(tempOptions);
        for (let i = 0; i <= 2; i++) {
            while(true){
                    
                let numRandom = Math.floor((Math.random() * (826 - 1 + 1)) + 1);
                const apiRequest = await fetch("https://rickandmortyapi.com/api/character/" + numRandom);
                const characterJson = await apiRequest.json();
                if (characterJson.id !== tempOptions[0].id){
                    tempOptions.push(characterJson);
                    break;
                }
            } ;
        }
        setOptions(messOptions(tempOptions));
        
    }

    function messOptions(options){

        const newOptions = [null, null, null, null];

        for(let i = 0; i <4; i++){
            do{
                let numRandom = Math.floor((Math.random() * (4 - 0 + 0)) + 0);
                if (newOptions[numRandom] ===null){
                    newOptions[numRandom] = options[i];
                    break;
                }

            } while(true);
        }
        
        return newOptions;


    }


    async function transitionAnimation(modal){

        const maxOpacity = (op) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    modal.style.opacity = op.toString();
                    resolve(true);
                }, 2)
            })
        }

        for(let i = 0.10; i <=1; i+= 0.01){
            await maxOpacity(i);
        }

    }


    function checkCharacter(e){

        const name = e.target.value;
        let $modal = document.querySelector(".modal");
        $modal.style.display = "flex";
        transitionAnimation($modal)
        let $resultado = document.querySelector("#resultado");
        // let $mensaje = document.querySelector("#mensaje");
        if (name === character.name){
            setResult("modal-correct");
            $resultado.innerText = "Perfect!";
            // $mensaje.innerText = "Yes! My name is " + name;
        } else{
            setResult("modal-incorrect");
            $resultado.innerText = "Error!";
            // $mensaje.innerText = "No! That's not my name"
        }


    }

    if (character === null) return null;

    return <>
        <div className='contenedor'>
            <div className='title'>
                <span>Guess Character</span>
            </div>

            <input type="button" id="random" name="random" className='button button-blue' value="Random" onClick={getCharacter} style = {{display: "none"}}/>

            {/*
              * Usaremos las tarjetas por tipos, así distinguiremos que hacemos con cada uno en la clase card
             */}
            <Card data={character} type="game"/>

            <div className='options'>
                {
                    options.map(o => {
                        const pos = options.indexOf(o);
                        return <input type="button" id={`op0${pos + 1}`} name={`op0${pos + 1}`} className='button button-blue' value={o.name} onClick={checkCharacter}/>
                    })
                }
            </div>

            <Modal setData = {setCharacter} classResult = {result}/>

        </div>
    </>
}

export default GuessCharacter;

