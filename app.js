const express = require('express');
const app = express();
const fruits = require("./routes/fruits")

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use(express.json())

// middleware (router) being used
app.use('/fruits', fruits); 
// .use means any http method - if that endpoint has "/"


module.exports = app