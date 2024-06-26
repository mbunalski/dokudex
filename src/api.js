export async function populateall ()  {
    
    console.log("ALLPOKE api call")
    const allpokemon = await fetch(`http://127.0.0.1:5000/all`);
    const allpokemonjson = await allpokemon.json();
    const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);
    // console.log(allpokemonjson)
    // console.log(result)
    // console.log(result[0][0])
    // console.log(typeof result)
    // for (const pokemon in result){
    //   console.log(result[pokemon][0])}
    return result

    // for (const pokemon in allpokemonjson){
    //     const li = document.createElement('li');
    //     li.innerText = pokemon
    //     document.querySelector('ul#pokelist').appendChild(li);
    // }


  }
  
  export async function byType (str)  {
    console.log("byType api call")
    const allpokemon = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/type/${str}`);

    const allpokemonjson = await allpokemon.json();

    const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);

    console.log(result)
    
    return result
    
    // document.querySelector('ul#pokelist').innerHTML = "";
    
    // }


  } 

  export async function filtered (metric1, metric2)  {
    console.log("filtered api call ", metric1, " ",  metric2)
    const allpokemon = await fetch(`https://database-dev.sc0cnr40cdhve.us-east-1.cs.amazonlightsail.com/types/${metric1}_${metric2}`);

    const allpokemonjson = await allpokemon.json();

    const result = Object.keys(allpokemonjson).map((key) => [key, allpokemonjson[key]]);

    console.log(result)
    return result
    
    // document.querySelector('ul#pokelist').innerHTML = "";
    // for (const pokemon in allpokemonjson){
    //     const li = document.createElement('li');
    //     li.innerText = pokemon
    //     document.querySelector('ul#pokelist').appendChild(li);
    // }


  } 