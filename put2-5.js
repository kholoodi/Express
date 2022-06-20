// Put  method  to modfiy the data 
let express = require('express')
let app = express()

//  courses array 
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

// using post method to add coures to courses array 
app.post('/', function (req, res){ //function to record new courses data 
    let newCourse = {
        id: req.body.id,
        title: req.body.title
    };
    //add new course to the courses 
    courses.push(newCourse)

    //prin courses array 
    res.json(courses)

})
//put to mofiy the data 
//must sent the id with request like: localhost:3000/0
app.put('/:id', function (req,res){
    //find the item first 
    let found = courses.find(function(item){
        return item.id === parseInt(req.params.id)
    })

    if (found){
        //update object to save the new data
        let update = {
            id: found.id,
            title: req.body.title
        }
        //where the update 
        let targetIndex = courses.indexOf(found)

        //now change the data
        courses.splice(targetIndex, 1, update)

        //print the new courses 
        res.send(courses)
    }
    else{
        //if the item doesn't here send the page not found 
        res.sendStatus(404)
    }
})

// make a new post request with json type 
app.listen(3000)
