// import React from 'react';
import React, {useEffect} from 'react';

export function PokeMetric({metric}) {
    const types = [
        {type:"[Type]"},
        {type:"Water"},
        {type:"Grass"},
        {type:"Ground"},
        {type:"Fairy"},
        {type:"Dark"},
        {type:"Dragon"},
        {type:"Ice"},
        {type:"Electric"},
        {type:"Psychic"},
        {type:"Steel"},
        {type:"Ghost"},
        {type:"Bug"},
        {type:"Rock"},
        {type:"Poison"},
        {type:"Flying"},
        {type:"Normal"},
        {type:"Fighting"},
        {type:"Fire"}
      ]
    const categories = [
        {type:"[Category]"},
        {type:"Water"},
        {type:"Water"}
        
      ]  

    function handleChange(event) {
        console.log("PokeMetric handleChange")
        console.log("Value being used from filter: ", event.target.value)
        metric(event.target.value)
        console.log("Value being used from filter: ", event.target.value)
        

    }

    return (

        <>
            <select onChange={handleChange}>
                {types.map(type => (
                    <option key={type.type} value={type.type}>{type.type}</option>
                ))}
            </select>
        </>

    );

}