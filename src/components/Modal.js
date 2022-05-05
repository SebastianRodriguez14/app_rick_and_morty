import React from 'react';
import { Link } from 'react-router-dom';



function Modal(props){

    function changeCharacter(){
        
        let $modal = document.querySelector(".modal");
        $modal.style.display = "none";
        let $buttonRandom = document.getElementById("random");
        $buttonRandom.click();
    }
    function closeModal(){
        let $modal = document.querySelector(".modal");
        transitionAnimation($modal).then(rs => {
            $modal.style.display = "none";
        })
        
    }

    async function transitionAnimation(modal){

        const minOpacity = (op) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    modal.style.opacity = op.toString();
                    resolve(true);
                }, 2)
            })
        }

        for(let i = 1; i >=0; i-= 0.01){
            await minOpacity(i);
        }
        return new Promise((resolve, reject) => {
            resolve(true);
        })

    }

    

    return <>
        <div className={'modal' + (props.classResult !== null ? ` ${props.classResult}` : "")}>
            <div className='ml-content'>
                <span id = "resultado"></span>
                {/* <span id = "mensaje"></span> */}
                <div className='options'>
                    <input type="button" className='button button-blue' value="Play Again" onClick={changeCharacter}/>
                
                    <input type="button" className='button button-red' value="Close" onClick={closeModal}/>

                </div>
            </div>
        </div>
    </>;
}

export default Modal



