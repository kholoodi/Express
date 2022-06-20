//render looking in view folder by file name 
let express = require('express')
let ejs = require('ejs')
let app = express()
app.set('view engine', 'ejs')

app.get('/', function (req, res){
    res.render('indexRender')
})
//localhost:3000
//display image in indexRender.ejs file 
app.listen(3000)