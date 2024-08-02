import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export function PokeInfo({pokemon}) {
    return (
        <li>
            <Popup trigger=
                {<button> <img src={`/images/${String(pokemon).replace(",","")}.png`}></img><div class="bg-inherit">{pokemon}</div></button>} 
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
        </li>
    )
};
