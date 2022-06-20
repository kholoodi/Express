// get method 
//1- require to express 
let express = require('express')
let app = express()
//2- when request this path '/'(the root here ) call the function 
//the function takes to parameters request & respoanse 
app.get(`/`, function (req,res){
    res.send('Welcome to our course')
})
//3- determent port that receives the request 
app.listen(3000)  //watch project is open on one port
//when we open the port we write localhost:3000


