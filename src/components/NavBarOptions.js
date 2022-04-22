import React from 'react';
import { Link } from 'react-router-dom';
import "../css/StyleNavbar.css";


function NavBarOptions(){
    return <>
        <div className='nav'>   
            <div className='title'>
                <Link to = "/">
                    <span>Rick and Morty</span>
                </Link>
            </div>

            <div className='options'>
                <Link to = "/random">Random</Link>    
                <Link to = "/search">Search</Link>
                <Link to = "/guess">Guess</Link>
            </div>

        </div>
        
    </>
}

export default NavBarOptions;
