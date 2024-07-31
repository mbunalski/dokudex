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

  export async function filtered (metric1, metric2)  {
    console.log("filtered api call ", metric1, " ",  metric2)
    const allpokemon = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/types/${metric1}_${metric2}`);

    const allpokemonjson = await allpokemon.json();

    const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);

    console.log(result)
    return result
  

  } 