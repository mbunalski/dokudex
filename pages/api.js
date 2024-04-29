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

async function testfunc ()  {
    console.log("Wammmy1")
    const weatherResponse = await fetch(`http://127.0.0.1:5000/all`);

    const weather = await weatherResponse.json();
    console.log(weather)

  }

// const testfunc = function() {
//     console.log("Wammy1")
    
//     }
    
    export default testfunc;
