export async function populateall ()  {
    
    console.log("ALLPOKE api call")
    const allpokemon = await fetch(`http://127.0.0.1:5001/all`);
    const allpokemonjson = await allpokemon.json();
    const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);

    return result

  }
  
  export async function byType (str)  {
    console.log("byType api call")
    const allpokemon = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/type/${str}`);

    const allpokemonjson = await allpokemon.json();

    const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);

    console.log(result)
    
    return result
    

  } 

  
  export async function filtered (metric1, metric2, category1, category2)  {
    console.log("filtered api call ", metric1, " ",  metric2)
    // const env = 'https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com';
    const env = 'http://127.0.0.1:5001';
    if (category1 === 'Category'){
      const pokemonm1 = await fetch(env + `/all`);
      const pokemonjsonm1 = await pokemonm1.json();
      const all = Object.keys(pokemonjsonm1).map((key) => [key, pokemonjsonm1[key]]);
      return all
    }

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

    const generations = {
      "[Region]":0,
      "Kanto":1,
      "Johto":2,
      "Hoenn":3,
      "Sinnoh":4,
      "Unova":5,
      "Kalos":6,
      "Alola":7,
      "Galar":8,
      "Paldea":9
  }


    const evolutions = {
      "[Type]": "Type",
      "None":"none",
      "Item":"item",
      "Time":"time",
      "Friendship":"friend",
      "Trade":"trade",

    }  
    var pokemonm1;
    if (category1==="Type"){
      pokemonm1 = await fetch(env +`/type/${metric1}`);
    }else if (category1==="Mono-Type"){
      pokemonm1 = await fetch(env +`/monotype`);
    }else if (category1==="Dual-Type"){
      pokemonm1 = await fetch(env +`/dualtype`);
    }else if (category1==="Generation"){
      pokemonm1 = await fetch(env +`/generation/${generations[metric1]}`);
    }else if (category1==="First"){
      pokemonm1 = await fetch(env +`/first`);
    }else if (category1==="Middle"){
      pokemonm1 = await fetch(env +`/second`);
    }else if (category1==="Final"){
      pokemonm1 = await fetch(env +`/third`);
    }else if (category1==="Paradox"){
      pokemonm1 = await fetch(env +`/paradox`);
    }else if (category1==="Mega"){
      pokemonm1 = await fetch(env +`/mega`);
    }else if (category1==="GMAX"){
      pokemonm1 = await fetch(env +`/gmax`);
    }else if (category1==="Fossil"){
      pokemonm1 = await fetch(env +`/fossil`);
    }else if (category1==="Starter"){
      pokemonm1 = await fetch(env +`/starter`);
    }else if (category1==="Legendary"){
      pokemonm1 = await fetch(env +`/legendary`);
    }else if (category1==="Mythical"){
      pokemonm1 = await fetch(env +`/mythical`);
    }else if (category1==="Baby"){
      pokemonm1 = await fetch(env +`/baby`);
    }else if (category1==="Move"){
      pokemonm1 = await fetch(env +`/move/${metric1}`);
    }else if (category1==="Evolution"){
      pokemonm1 = await fetch(env +`/unique_evo/${evolutions[metric1]}`);
    }
    
    const pokemonjsonm1 = await pokemonm1.json();
    const m1 = Object.keys(pokemonjsonm1).map((key) => [key, pokemonjsonm1[key]]);

    if (metric2 === "Type"){
      return m1
    }
    // const pokemonm2 = await fetch(env +`/${category2.toLowerCase()}/${metric2}`);
    // 

    var pokemonm2;
    if (category2==="Type"){
      pokemonm2 = await fetch(env +`/type/${metric2}`);
    }else if (category2==="Mono-Type"){
      pokemonm2 = await fetch(env +`/monotype`);
    }else if (category2==="Dual-Type"){
      pokemonm2 = await fetch(env +`/dualtype`);
    }else if (category2==="Generation"){
      pokemonm2 = await fetch(env +`/generation/${generations[metric2]}`);
    }else if (category2==="First"){
      pokemonm2 = await fetch(env +`/first`);
    }else if (category2==="Middle"){
      pokemonm2 = await fetch(env +`/second`);
    }else if (category2==="Final"){
      pokemonm2 = await fetch(env +`/third`);
    }else if (category2==="Paradox"){
      pokemonm2 = await fetch(env +`/paradox`);
    }else if (category2==="Mega"){
      pokemonm2 = await fetch(env +`/mega`);
    }else if (category2==="GMAX"){
      pokemonm2 = await fetch(env +`/gmax`);
    }else if (category2==="Fossil"){
      pokemonm2 = await fetch(env +`/fossil`);
    }else if (category2==="Starter"){
      pokemonm2 = await fetch(env +`/starter`);
    }else if (category2==="Legendary"){
      pokemonm2 = await fetch(env +`/legendary`);
    }else if (category2==="Mythical"){
      pokemonm2 = await fetch(env +`/mythical`);
    }else if (category2==="Baby"){
      pokemonm2 = await fetch(env +`/baby`);
    }else if (category2==="Move"){
      pokemonm2 = await fetch(env +`/move/${metric2}`);
    }else if (category2==="Evolution"){
      pokemonm2 = await fetch(env +`/unique_evo/${evolutions[metric2]}`);
    }
    const pokemonjsonm2 = await pokemonm2.json();
    const m2 = Object.keys(pokemonjsonm2).map((key) => [key, pokemonjsonm2[key]]);
    
    const result = []

    m1.forEach(e1 => {
      m2.forEach(e2 => e1[0] === e2[0] && result.push(e1));
    });
    
    return result
  

  }


  