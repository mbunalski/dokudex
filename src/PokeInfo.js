import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export function PokeInfo({pokemon}) {
    return (
        <>
            <Popup trigger=
                {<button> <img src={`/images/${String(pokemon).replace(",","")}.png`}></img>{pokemon}</button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content' >
                                <img src={`/images/${String(pokemon).replace(",","")}.png`}></img>
                                {pokemon} 
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </>
    )
};
