export async function populateall ()  {
    
    const allpokemon = await fetch(`http://127.0.0.1:5000/all`);

    const allpokemonjson = await allpokemon.json();

    for (const pokemon in allpokemonjson){
        const li = document.createElement('li');
        li.innerText = pokemon
        document.querySelector('ul#pokelist').appendChild(li);
    }


  }
  
  export async function byType (str)  {
    console.log("Wammmy1")
    const allpokemon = await fetch(`http://127.0.0.1:5000/type/${str}`);

    const allpokemonjson = await allpokemon.json();
    
    document.querySelector('ul#pokelist').innerHTML = "";
    for (const pokemon in allpokemonjson){
        const li = document.createElement('li');
        li.innerText = pokemon
        document.querySelector('ul#pokelist').appendChild(li);
    }


  } 

  export async function filtered (metric1, metric2)  {
    console.log("filtered api call")
    const allpokemon = await fetch(`http://127.0.0.1:5000/type/${metric1}`);

    const allpokemonjson = await allpokemon.json();

    return allpokemonjson
    
    // document.querySelector('ul#pokelist').innerHTML = "";
    // for (const pokemon in allpokemonjson){
    //     const li = document.createElement('li');
    //     li.innerText = pokemon
    //     document.querySelector('ul#pokelist').appendChild(li);
    // }


  } 