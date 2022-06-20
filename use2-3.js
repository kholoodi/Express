// use  method  
let express = require('express')
let app = express()
 //use applay with request with any path
 app.use(function(req, res, next){
     console.log('welcom to the courses')
     next()
 })
 //path 1
app.get('/courses/api', function (req, res){
    res.send('first course')
})
//If we want to do this request we write  : localhost:3000/courses/api

//path 2
app.get('/courses/js', function (req, res){
    res.send('second course')
})
//If we want to do this request we write : localhost:3000/courses/js
app.listen(3000)
