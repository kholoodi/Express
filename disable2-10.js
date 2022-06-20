// disable method to disable specfic feature 
let express = require('express')
let app = express()
//for disable proxy 
app.disable('trust proxy')
// enabled method return true if it enable or false if not 
console.log(app.disabled('trust proxy'))

app.listen(3000)