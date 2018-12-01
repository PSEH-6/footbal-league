// test/integration/controllers/CountryController.test.js
var supertest = require('supertest');

describe('CountryController.getCountries', function () {

    describe('#Fetch()', function () {
        it('should fetch', function (done) {
            supertest(sails.hooks.http.app)
                .get('/api/countries')
                .expect(200)
                .end(done);
        });
    });

});