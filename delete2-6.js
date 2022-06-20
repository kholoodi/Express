// Delete  method  remove data 
let express = require('express')
let app = express()

let courses = [
    {id: 0, title: 'API'},
    {id: 1, title: 'JavaScript'}
];

let bodyParser = require('body-parser')
 
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json())

app.get('/', function (req, res){
    res.json(courses)
})
app.post('/', function (req, res){ 
    let newCourse = {
        id: req.body.id,
        title: req.body.title
    };
    courses.push(newCourse)
    res.json(courses)

})
app.put('/:id', function (req,res){
    let found = courses.find(function(item){
        return item.id === parseInt(req.params.id)
    })

    if (found){
        let update = {
            id: found.id,
            title: req.body.title
        }
        let targetIndex = courses.indexOf(found)
        courses.splice(targetIndex, 1, update)
        res.send(courses)
    }
    else{
        res.sendStatus(404)
    }
})
//Delete item from courses 
    app.delete('/:id',function(req, res){
        //first find the item 
        let found = courses.find(function(item){
            return item.id === parseInt(req.params.id)
        })
        if (found){
            //if item is found return it's index 
            let targetIndex = courses.indexOf(found)
            //delete the item 
            courses.splice(targetIndex, 1)
            //print the the result 
            res.send(courses)
        }
        else{
            res.sendStatus(404)
        }

    })
app.listen(3000)
