const express = require('express');
const cors = require('cors')
const app = express();
const fruits = require("./routes/fruits")

app.get('/', (req, res) => {
   res.send('Hello World!');
})


app.use(cors())
app.use(express.json())

// middleware (router) being used
app.use('/fruits', fruits); 
// .use means any http method - if that endpoint has "/"


module.exports = app