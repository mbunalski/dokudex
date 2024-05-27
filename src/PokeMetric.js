// import React from 'react';
import React, {useEffect} from 'react';

export function PokeMetric({metric}) {
    const types = [
        {type:"Fire"},
        {type:"Water"},
        {type:"Grass"},
        {type:"Ground"}
      
      ]

    function handleChange(event) {
        console.log("PokeMetric handleChange")
        console.log("Value being used from filter: ", event.target.value)
        metric(event.target.value)
        console.log("Value being used from filter: ", event.target.value)
        

    }

    return (

        <>
            <label>Filter: </label>
            <select onChange={handleChange}>
                {types.map(type => (
                    <option value={type.type}>{type.type}</option>
                ))}
            </select>
        </>

    );

}