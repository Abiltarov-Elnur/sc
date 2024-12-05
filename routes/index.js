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
    desc:"Спортивный седан, традиционно основанный на 3-й серии BMW. Отличается высокой производительностью, отличной управляемостью и мощными двигателями. Актуальная версия (G80) оснащена рядным шестицилиндровым двигателем с турбонаддувом мощностью до 510 л.с."
  });
});

/* BMW M4 page */
router.get('/m4', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M4",
    picture: "images/bmw_m4.jpg",
    desc:"Купе или кабриолет, являющийся двухдверной версией M3. Имеет ту же платформу, двигатель и характеристики. Популярен среди любителей драйва за спортивный характер и стильный дизайн."
  });
});

/* BMW M5 page */
router.get('/m5', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M5",
    picture: "images/bmw_m5.jpg",
    desc:"Спортивный седан бизнес-класса, построенный на базе 5-й серии BMW. Отличается высокой мощностью (до 635 л.с. в версиях Competition) и инновационными технологиями, включая полный привод xDrive. Балансирует между комфортом и трековыми характеристиками."
  });
});
module.exports = router
