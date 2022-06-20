//req.body to receive data from the body 

let express = require('express')
let app = express()

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get('/', function (req, res){
    res.send('Your name is: '+ req.body.name)
})
/**
 * {
	"name": "kholood"
}
 */

app.listen(3000)