// listen  method  
let express = require('express');
let app = express()
 
app.get('/',function (req,res){
    res.send('Welcome to our course')
});

app.listen(3000,function (){
    console.log('server started on port 3000')
})  

