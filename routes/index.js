var bodyParser = require('body-parser');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { ccosts: "0", revenue: "0" });
});

router.get('/about', function(req, res) {
  res.render('about');
});


router.post('/ccosts', function(req, res) {
  var ccosts = req.body.ccosts
  res.render('index', { ccosts: (ccosts) });
});

router.post('/revenue', function(req, res) {
  var revenue = req.body.revenue
  res.render('index', { ccosts: (ccosts), revenue: (revenue) });
});


module.exports = router;
