//res.redirect 
//في حال طلب المستخدم صفحة معينىة ستم تحويله الى صفحة اخرى 

let express = require('express')
let app = express()

app.get('/courses', function (req, res){
    res.redirect('/courses/express')
})
app.get('/courses/express', function (req, res){
    res.send('Welcom to EXPRESS course')
})
//localhost:3000/courses
app.listen(3000)