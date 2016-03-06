'use strict';
var assert = require("assert");
var fs = require('fs');
var informaticaService = require('../AppMetrics/services/informaticaService.js');

describe("Informatica Client Test", function () {
    this.timeout(10000);
    describe("getMetricsData ", function () {
        var informaticaClient = new informaticaService();

        it("returns json data", function (done) {
            informaticaClient.getMetricsData().then(function (responseBody) {
                assert.equal(responseBody,
                    JSON.stringify({
                        "@type": "error",
                        "code": "UI_13406",
                        "description": "icSessionId EFelWYBP4WmMeO2g9PJs is not valid.",
                        "statusCode": 403
                    }));
                done();
            });
        });

    });
    describe("writeMetrics ", function () {
        var informaticaClient = new informaticaService();

        it("writes json file", function (done) {
            var jsonfile = __dirname.toString().replace('test', 'AppMetrics/jsonData/jsonfile.json');
            if (fs.existsSync(jsonfile)) {
                fs.unlink(jsonfile, function(err){
                    if (err) throw (err);(err)
                });
            }
            var jsonData = JSON.stringify({"acb": 200, 3: "abc"});
            informaticaClient.writeMetrics(jsonData);

            fs.readFile(jsonfile, 'utf8', function (err, data) {
                if (err)  throw (err);
                assert.equal(jsonData, data);
                done();
            });

        });
    });
});
