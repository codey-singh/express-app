var express = require("express");
var app = express();
var router = require('./router/router');

app.use(express.static("public"))
.set("view engine", "pug")
.use('/', router)
.listen(8000);
