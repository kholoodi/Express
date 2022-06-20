//Using Set() method to using  package in project 
// for example using  ejs package  to add the layout 
//first we must install the ejs package type command : npm i ejs 
let express = require('express')
let ejs = require('ejs')
let app = express()

//set 
app.set('view engine', 'ejs')



app.listen(3000)