// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// app.use(cors())
 
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

async function populateall ()  {
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

// const testfunc = function() {
//     console.log("Wammy1")
    
//     }
    
    export default populateall;
