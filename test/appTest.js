'use strict';

var request = require("supertest"),
    assert = require("assert");


var app = request.agent(require("../app").getNodeApp);


describe("App Metric Server", function () {
    this.timeout(10000);
    describe("GET /", function () {
        it("returns status code 200", function (done) {
            app.get("/").end(function(err, response){
                assert.equal(response.statusCode, 200);
                done();
            });
        });
    });
});