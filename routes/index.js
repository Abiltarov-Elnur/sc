var express = require('express');
var router = express.Router();

/* BMW M3 page */
router.get('/m3', function(req, res, next) {
  res.send("<h1>BMW M3 page</h1>");
});

/* BMW M4 page */
router.get('/m4', function(req, res, next) {
  res.send("<h1>BMW M4 page</h1>");
});

/* BMW M5 page */
router.get('/m5', function(req, res, next) {
  res.send("<h1>BMW M5 page</h1>");
});

module.exports = router
