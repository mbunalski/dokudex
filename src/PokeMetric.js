// import React from 'react';
import React, {useEffect} from 'react';

export function PokeMetric({metric, category}) {
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
        {type:"Type"},
        {type:"Generation"}
        
      ]  

    function handleChange(event) {
        if (event.target.id==='category'){
            category(event.target.value)
            console.log("Category Change " + event.target.value)
        }else{
            metric(event.target.value)
            console.log("Category Type " + event.target.value)
        }
        
        
    }

    return (

        <>
            <div class="flex-row">        
            <select id='category' onChange={handleChange}>
                {categories.map(type => (
                    <option key={type.type} value={type.type}>{type.type}</option>
                ))}
            </select>
            <select id='type' onChange={handleChange}>
                {types.map(type => (
                    <option key={type.type} value={type.type}>{type.type}</option>
                ))}
            </select>
            </div>
        </>

    );

}