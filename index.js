var express = require('express')
require('dotenv').config()
var app = express()
app.get('/api', function (req, res) {
    res.send('hello world')
})
app.get('/api/login', function (req, res) {
    res.send('Login Page');
})

const data = { "name": "Ashish Yadav", "About": "Learning Deployment" }
app.get('/api/aboutme', function (req, res) {
    res.json(data);
})
app.get('/api/newthings', function (req, res) {
    res.send("word hard until you are finished")
})


app.listen(process.env.PORT, () => console.log(`listing at port number ${process.env.PORT}`));