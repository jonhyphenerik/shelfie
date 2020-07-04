// load express framework and body-parser helper
const express = require("express"),
    bodyParser = require("body-parser"),

//create express instance to serve end points
    app = express(),

//load node's filesystem helper library
    fs = require("fs");

//configure express app to user body-parser for JSON data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//route handler
const routes = require("./routes/routes.js")(app, fs);


const server = app.listen(3001, ()=>{console.log("listening on port %s...", server.address().port)})