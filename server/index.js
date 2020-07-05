// load express framework
const express = require("express"),

    // load massive and dotenv
    massive = require("massive"),
    dotenv = require("dotenv").config(),

    // set port and hostname
    port = 6969,
    hostname = "http://localhost:6969",

    //create express instance to serve end points
    app = express(),

    //load node's filesystem helper library
    fs = require("fs"),

    //listen on port and respond
    server = app.listen(port, ()=>{console.log(`listening on port ${port}`)}),

    //destructure vars from .env
    {SERVER_PORT, CONNECTION_STRING} = process.env;

    //set up db in heroku using massive and vars from .env
    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    });