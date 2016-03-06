'use strict';

var fs = require('fs');
var Q = require('q');
var config = require('config');
var request = require('request');
var mkdirp = require('mkdirp');

function InformaticaClient() {}

function getMetricsData() {
    var options = {
        url: config.get('informatica.ApiUrl'),
        json: true,
        headers: {'icSessionId': config.get('informatica.icSessionId'), 'Accept': 'application/json'}
    };
    var deferred = Q.defer();
    request(options, function (error, response, body) {
        var responseBody;
        if (error) throw (error);
        responseBody = JSON.stringify(body);
        deferred.resolve(responseBody);
    });
    return deferred.promise;

}

var writeMetrics = function (jsonData) {
    var jsonDirectory = 'AppMetrics/jsonData/';
    mkdirp(jsonDirectory, function (error) {
        if (error) throw (error);
    });

    fs.writeFile(jsonDirectory + 'jsonfile.json', jsonData, function (error) {
        if (error) throw (error);
    });
};

InformaticaClient.prototype.getMetricsData = getMetricsData;
InformaticaClient.prototype.writeMetrics = writeMetrics;
module.exports = InformaticaClient;