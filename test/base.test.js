var assert = require('assert'),
    nock = require('nock'),
    base = require('../lib/base');
const response = require('./resources/base.data');

describe('base', function() {

    beforeEach(() => {
        nock('https://apiv1.teleapi.net')
            .post('/notifications/set')
            .reply(200, response.test2)
            .post('/notifications/get')
            .reply(200, response.test1);
    });

    it('should clone an object', function() {
        var original = {
            code: 200,
            status: "success",
            data: "this is only a test"
        };

        var clone = base.clone(original);

        assert.deepEqual(original, clone);
        assert.equal(original.code, clone.code);
    });

    it('should make a get notification request', function(done) {
        var opts = {
            base: "https://apiv1.teleapi.net",
            controller: "notifications",
            endpoint: "get"
        };
        var data = {};

        base.request(opts, data, function(resp, response) {
            assert.equal(resp.code, 200);
            assert.equal(resp.data, "Test get reply from nock");
            done();
        });
    });

    it('should make a set notification request', function(done) {
        var opts = {
            base: "https://apiv1.teleapi.net",
            controller: "notifications",
            endpoint: "set"
        };
        var data = {};

        base.request(opts, data, function(resp, response) {
            assert.equal(resp.code, 200);
            assert.equal(resp.data, "Test set reply from nock");
            done();
        });
    });
});
