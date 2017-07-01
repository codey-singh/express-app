var express = require('express');
var _ = require('underscore');
var router = express.Router();

router.get('/', function(request, response) {
  response.render("login");
});

module.exports = router;