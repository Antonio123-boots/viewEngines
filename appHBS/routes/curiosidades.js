var express = require('express');
var router = express.Router();

/* GET curiosidades page. */
router.get('/', function(req, res, next) {
  res.render('curiosidades', { title: 'Curiosidades' });
});

router.get('/avaliacao', function(req, res, next) {
  res.render('avaliacao', { title: 'Avaliação' });
});

module.exports = router;
