var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('apan', { title: 'Apan Blumenau' });
});

router.get('/mensagem', function(req, res, next) {
  res.render('mensagem', { title: 'Mensagem' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Cadastro' });
});

module.exports = router;
