//res.status method gives respon about the request statu
//ت
let express = require('express')
let app = express()

res.status(403).end()
res.status(400).send('Bad request')
res.status(404).send('sorry, page not found')


//localhost:3000
app.listen(3000)