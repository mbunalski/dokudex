export async function populateall ()  {
    
    console.log("ALLPOKE api call")
    const allpokemon = await fetch(`http://127.0.0.1:5000/all`);
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

  // export async function filtered_old (metric1, metric2)  {
  //   console.log("filtered api call ", metric1, " ",  metric2)
  //   const allpokemon = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/types/${metric1}_${metric2}`);
    
  //   const allpokemonjson = await allpokemon.json();
    
  //   const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);
  //   console.log(result)
  //   for (let value in result){
  //     console.log(result[value][0])
  //   }
  //   return result
  

  // }
  
  export async function filtered (metric1, metric2, category1, category2)  {
    console.log("filtered api call ", metric1, " ",  metric2)
    if (category1 === 'Category'){
      const pokemonm1 = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/all`);
      const pokemonjsonm1 = await pokemonm1.json();
      const all = Object.keys(pokemonjsonm1).map((key) => [key, pokemonjsonm1[key]]);
      return all
    }
    const pokemonm1 = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/${category1.toLowerCase()}/${metric1}`);
    const pokemonjsonm1 = await pokemonm1.json();
    const m1 = Object.keys(pokemonjsonm1).map((key) => [key, pokemonjsonm1[key]]);

    if (metric2 === "Type"){
      return m1
    }
    const pokemonm2 = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/${category2.toLowerCase()}/${metric2}`);
    const pokemonjsonm2 = await pokemonm2.json();
    const m2 = Object.keys(pokemonjsonm2).map((key) => [key, pokemonjsonm2[key]]);
    
    const result = []

    m1.forEach(e1 => {
      m2.forEach(e2 => e1[0] === e2[0] && result.push(e1));
    });
    
    return result
  

  }


  