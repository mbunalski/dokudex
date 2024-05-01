export async function populateall ()  {
    console.log("Wammmy1")
    const allpokemon = await fetch(`http://127.0.0.1:5000/all`);

    const allpokemonjson = await allpokemon.json();
    console.log(typeof allpokemonjson)

    for (const pokemon in allpokemonjson){
        const li = document.createElement('li');
        li.innerText = pokemon
        document.querySelector('ul#pokelist').appendChild(li);
    }


  }
  
  export async function populateall ()  {
    console.log("Wammmy1")
    const allpokemon = await fetch(`http://127.0.0.1:5000/all`);

    const allpokemonjson = await allpokemon.json();
    console.log(typeof allpokemonjson)

    for (const pokemon in allpokemonjson){
        const li = document.createElement('li');
        li.innerText = pokemon
        document.querySelector('ul#pokelist').appendChild(li);
    }


  } 