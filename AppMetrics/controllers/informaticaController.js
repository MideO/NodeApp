'use strict'

var informaticaService = require('../services/informaticaService.js');
var informaticaService = new informaticaService();

function InformaticaController(){}

function renderInformaticaData (req, response) {
    console.log('\nMethod: ', req.method, 'Uri:',req.url, 'IP Addr', req.connection.remoteAddress);
    informaticaService.getMetricsData().then(function(responseBody){
        informaticaService.writeMetrics(responseBody);
        response.render('index', {BodyText: responseBody});
    });
}

InformaticaController.prototype.renderInformaticaData = renderInformaticaData;
module.exports = InformaticaController;
