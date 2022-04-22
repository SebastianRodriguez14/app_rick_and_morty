import React from 'react';

function Card(props) {

    return <>
        <div className='bigCard'>

            <div>
                <img src={props.data.image} className="image" />
            </div>

            <div className='title'>
                <span>{props.data.name}</span>

            </div>

            <div className='content'>
                <div className='row'>
                    <div className='col-4'>
                        <label>Species:</label>
                    </div>
                    <div className='col-8'>
                        <label>{props.data.species}</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <label>Gender:</label>
                    </div>
                    <div className='col-8'>
                        <label>{props.data.gender}</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <label>Origin:</label>
                    </div>
                    <div className='col-8'>
                        <label>{props.data.origin.name}</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <label>Status:</label>
                    </div>
                    <div className='col-8'>
                        <label>{props.data.status}</label>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Card;