// Post  method  to Add data 
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

// make a new post request with json type 
app.listen(3000)
