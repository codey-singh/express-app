var express = require("express");
var app = express();
var router = require('./router/router');
var cookieParser = require("cookie-parser");
var session = require("express-session");

var dbConfig = require('./db/db.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url);

//using the static middleware for the public folder
app.use(express.static("public"))

//using cookie parser for cookie management for session implementation
.use(cookieParser())

//using session middleware for session management
.use(session({ 
  secret : "catscanfly",
  proxy: true,  
  resave: true,
  saveUninitialized: true
}))

.use(passport.initialize())

.use(passport.session())

//using pug view engine formerely known as "Jade"
.set("view engine", "pug")

//including router.js and mapping it to "/" root route
.use('/', router)
.listen(8000);
