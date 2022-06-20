//res.send the final responce that send 
//the send responce maybe can any things html, json ,or txt 
let express = require('express')
let app = express()

app.get('/', function (req, res){
   // res.send('text') //text
   // res.send({some:'json'}) //json
   //res.send('<h1>HTML</h1>')  //html
   res.send([1,2,3]) //array
})

//localhost:3000
app.listen(3000)