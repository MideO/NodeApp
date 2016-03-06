var express = require('express');
var informaticaController = require('./AppMetrics/controllers/informaticaController.js');
var informaticaController = new informaticaController();


var router = express.Router();

router.get('/', informaticaController.renderInformaticaData);
module.exports = router;