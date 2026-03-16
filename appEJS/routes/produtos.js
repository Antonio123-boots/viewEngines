var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos' });
});

router.get('/alimentos', function(req, res, next) {
  res.render('alimentos', { title: 'Alimentos' });
});

router.get('/eletronicos', function(req, res, next) {
  res.render('eletronicos', { title: 'Eletrônicos' });
});

router.get('/roupas', function(req, res, next) {
  res.render('roupas', { title: 'Roupas' });
});

router.get('/brinquedos', function(req, res, next) {
  res.render('brinquedos', { title: 'Brinquedos' });
});

module.exports = router;
