var express = require('express');
var router = express.Router();

const alimentos = [
  { id: 1,  nome: 'Pão Francês', preco: 2.00 },
  { id: 2,  nome: 'Pão Doce', preco: 3.00 },
  { id: 3,  nome: 'Rosca', preco: 2.50 },
  { id: 4,  nome: 'Chocolate', preco: 5.00 },
  { id: 5,  nome: 'Balas', preco: 0.50 }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos/produtos', { title: 'Produtos' });
});

router.get('/alimentos', function(req, res, next) {
  res.render('produtos/alimentos', { title: 'Alimentos', alimentos  });
});

router.get('/eletronicos', function(req, res, next) {
  res.render('produtos/eletronicos', { title: 'Eletrônicos' });
});

router.get('/roupas', function(req, res, next) {
  res.render('produtos/roupas', { title: 'Roupas' });
});

router.get('/brinquedos', function(req, res, next) {
  res.render('produtos/brinquedos', { title: 'Brinquedos' });
});

module.exports = router;
