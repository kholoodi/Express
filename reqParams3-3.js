//req.body to receive data from the body 

let express = require('express')
let app = express()

app.get('/:name', function (req, res){
    res.send('Your name is: '+ req.params.name)
})
//localhost:3000/kkk

app.listen(3000)