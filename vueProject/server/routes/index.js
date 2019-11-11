var express = require('express');
var router = express.Router();
const { find, insert } = require('../db/db.js');
// const app = express();

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });
/* GET home page. */
router.get('/recentlyplay', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', "*")
  let data = await find('1909');
  res.json(data)
});
router.get('/senddetails', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', "*")
  // req.on('data', function(chunk){
  //   console.log()
  // })
  console.log(req.query.gid);
  let data = await find('1909', {
    gid: (req.query.gid - 0)
  });
  // console.log(data)
  res.json(data)
});
router.get('/checklogin', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', "*")
  let data = await find('user', {
    username: req.query.username,
    password: req.query.password
  });
  res.json(data)
  res.send(req.query)
});
router.get('/newuser', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', "*")
  let data = await insert('user', [{
    username: req.query.username,
    password: req.query.password
  }]);
  res.json(data)
});

module.exports = router;
