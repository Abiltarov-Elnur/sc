var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* BMW M3 page */
router.get('/m3', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M3",
    picture: "images/bmw_m3.jpg",
    desc:"lorem20"
  });
});

/* BMW M4 page */
router.get('/m4', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M4",
    picture: "images/bmw_m4.jpg",
    desc:"lorem20"
  });
});

/* BMW M5 page */
router.get('/m5', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M5",
    picture: "images/bmw_m5.jpg",
    desc:"lorem20"
  });
});
module.exports = router
