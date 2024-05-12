import React from 'react';

export function PokeMetric({update, metric}) {
    const types = [
        {type:"Fire"},
        {type:"Water"},
        {type:"Grass"},
        {type:"Ground"}
      
      ]

    function handleChange(event) {
        console.log("PokeMetric handleChange")
        metric(event.target.value)

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