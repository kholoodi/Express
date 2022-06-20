//Using all() method to apply  function on specific pages or all pages in project 

let express = require('express')

let app = express()
// apply the requireAuthentication for all pages in project 
app.all('*', requireAuthentication)

// apply the requireAuthentication for all pages in gerades   
app.all('/grades/*', requireAuthentication)

app.listen(3000)