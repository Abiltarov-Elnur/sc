var express = require('express');
var router = express.Router();
var User = require('../models/user').User;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', counter:req.session.counter });
});
  
/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
});

/* POST login/registration page. 
router.post('/logreg', async function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  console.log(username);
  console.log(password);
  var users = await User.find({username: username});
  console.log(users);
  if (!users.length) {
  res.send("<h1>Пользователь НЕ найден</h1>");
  } else {
  res.send("<h1>Пользователь найден</h1>");
  }
  });


//res.send("<h1>Пользователь НЕ найден</h1>");
var user = new User({username:username,password:password})
await user.save();
req.session.user_id = user._id;
res.redirect('/');
*/

/* POST login/registration page. */
router.post('/logreg', async function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  console.log(username);
  console.log(password);
  var users = await User.find({username: username});
  console.log(users);
  if (!users.length) {
  //res.send("<h1>Пользователь НЕ найден</h1>");
  var user = new
  User({username:username,password:password})
  await user.save();
  req.session.user_id = user._id;
  res.redirect('/');
  } else {
  //res.send("<h1>Пользователь найден</h1>");
  var foundUser = users[0];
  if(foundUser.checkPassword(password)){
  req.session.user_id = foundUser._id
  res.redirect('/')
  } else {
  res.render('logreg',{title: 'Вход'});
  }
  }
  });

module.exports = router

/* BMW M3 page
router.get('/m3', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M3",
    picture: "images/bmw_m3.jpg",
    desc:"Спортивный седан, традиционно основанный на 3-й серии BMW. Отличается высокой производительностью, отличной управляемостью и мощными двигателями. Актуальная версия (G80) оснащена рядным шестицилиндровым двигателем с турбонаддувом мощностью до 510 л.с."
  });
});

/* BMW M4 page 
router.get('/m4', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M4",
    picture: "images/bmw_m4.jpg",
    desc:"Купе или кабриолет, являющийся двухдверной версией M3. Имеет ту же платформу, двигатель и характеристики. Популярен среди любителей драйва за спортивный характер и стильный дизайн."
  });
});

/* BMW M5 page 
router.get('/m54', function(req, res, next) {
  res.render("bmw", {
    title: "BMW M5",
    picture: "images/bmw_m5.jpg",
    desc:"Спортивный седан бизнес-класса, построенный на базе 5-й серии BMW. Отличается высокой мощностью (до 635 л.с. в версиях Competition) и инновационными технологиями, включая полный привод xDrive. Балансирует между комфортом и трековыми характеристиками."
  });
});
*/





/*спросить что за фигня тут произошла*/