// Enable method to enable specfic feature 
let express = require('express')
let app = express()
//for enable proxy 
app.enable('trust proxy')
// enabled method return true if it enable or false if not 
console.log(app.enabled('trust proxy'))

app.listen(3000)