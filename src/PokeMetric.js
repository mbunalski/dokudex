// import React from 'react';
import React, {useState} from 'react';

export function PokeMetric({metric, category}) {
    const [selections, setSelections] = useState([{type:"[Select]"}]);

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

    const generations = [
        {type:"[Region]"},
        {type:"Kanto"},
        {type:"Johto"},
        {type:"Hoenn"},
        {type:"Sinnoh"},
        {type:"Unova"},
        {type:"Kalos"},
        {type:"Alola"},
        {type:"Galar"},
        {type:"Paldea"}
    ]  
    const categories = [
        {type:"[Category]"},
        {type:"Type"},
        {type:"Mono-Type"},
        {type:"Dual-Type"},
        {type:"Generation"},
        {type:"First"},
        {type:"Middle"},
        {type:"Final"},
        {type:"Paradox"},
        {type:"Mega"},
        {type:"GMAX"},
        {type:"Fossil"},
        {type:"Starter"},
        {type:"Legendary"},
        {type:"Mythical"},
        {type:"Baby"},
        {type:"Move"},
        {type:"Evolution"}
      ]
      
      const evolutions =[
        {type:"[Type]"},
        {type:"None"},
        {type:"Item"},
        {type:"Time"},
        {type:"Friendship"},
        {type:"Trade"}

      ]

      const noValues =[
        {type:"[Select]"}
      ]

    function handleChange(event) {
        if (event.target.id==='category'){
            category(event.target.value)
            metric(event.target.value)
            if (event.target.value ==='Type'){
                setSelections(types)
            }else if (event.target.value ==='Evolution'){
                setSelections(evolutions)
            }else if (event.target.value ==='Generation'){
                setSelections(generations)
            }else{
                setSelections(noValues)
            }
                

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
                {selections.map(type => (
                    <option key={type.type} value={type.type}>{type.type}</option>
                ))}
            </select>
            </div>
        </>

    );

}