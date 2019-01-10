var assert = require('assert'),
    nock = require('nock'),
    E911 = require('../lib/911');
const response = require('./resources/911.data');

describe('E911', function() {

    beforeEach(() => {
        nock("https://apiv1.teleapi.net")
            .post('/911/create')
            .reply(200, response.create)
            .post('/911/info')
            .reply(200, response.info)
            .post('/911/update')
            .reply(200, response.update)
            .post('/911/remove')
            .reply(200, response.remove)
            .post('/911/validate')
            .reply(200, response.validate)
            .post('/911/validate')
            .reply(200, response.validate_error);
    });

    it('should create 911 info', function(done) {
        E911.create(
            "12345",
            "John Doe",
            "123 Main St",
            "Englewood",
            "CO",
            "80112",
            {},
            function(resp) {
                assert.equal(resp.code, 200);
                assert.equal(resp.data.id, 42);
                assert.equal(resp.data.did_number, 5555555555);
                done();
            }
        );
    });

    it('should return 911 info', function(done) {
        E911.info('123456', function(resp) {
            assert.equal(resp.code, 200);
            assert.equal(resp.data.id, 42);
            assert.equal(resp.data.did_number, 5555555555);
            done();
        });
    });

    it('should update 911 info', function(done) {
        E911.update(
            "12345",
            "John Doe",
            "", // address
            "", // city
            "", // state
            "", // zip
            {}, // options
            function(resp) {
                assert.equal(resp.code, 200);
                assert.equal(resp.data.id, 42);
                assert.equal(resp.data.did_number, 5555555555);
                done();
            }
        );
    });

    it('should remove 911 info', function(done) {
        E911.remove("12345", function(resp) {
            assert.equal(resp.code, 200);
            assert.equal(resp.data, "Successfully removed 911 information");
            done();
        });
    });

    it('should validate an address', function(done) {
        E911.validate('123 Main St', 'Denver', 'CO', 80201, function(resp) {
            assert.equal(resp.code, 200);
            assert.equal(resp.data, "Address is validated");
            done();
        });
    });

    it('should validate an address (error)', function(done) {
        E911.validate('123 Main St', 'Denver', 'CO', 80201, function(resp) {
            assert.equal(resp.code, 300);
            assert.equal(resp.data.error, "newaddress");
            assert.equal(resp.data.status, "invalid");
            done();
        });
    });

    describe("Alert Groups", function() {
        
        beforeEach(() => {
            nock('https://apiv1.teleapi.net')
                .post('/911/groups/create')
                .reply(200, response.create_alert_group)
                .post('/911/groups/list')
                .reply(200, response.list_alert_groups)
                .post('/911/groups/remove')
                .reply(200, response.remove_alert_group)
                .post('/911/groups/get')
                .reply(200, response.lookup_alert_group)
                .post('/911/groups/assign')
                .reply(200, response.assign_number_to_group)
                .post('/911/groups/assign')
                .reply(200, response.assign_number_to_group_error)
                .post('/911/groups/unassign')
                .reply(200, response.unassign_number_from_group)
                .post('/911/groups/endpoint/add')
                .reply(200, response.add_notification_to_group)
                .post('/911/groups/endpoint/remove')
                .reply(200, response.remove_notification_from_group)
                .post('/911/groups/conference/set')
                .reply(200, response.set_alert_group_conference_setting);
        });

        it('should create an alert group', function(done) {
            E911.create_alert_group('test group name', function(resp) {
                assert.equal(resp.code, 200);
                done();
            });
        });

        it('should return a list of alert groups', function(done) {
            E911.list_alert_groups(function(resp) {
                assert.equal(resp.code, 200);
                done();
            });
        });

        it('should lookup alert group', function(done) {
            E911.lookup_alert_group(
                "12345",
                "42",
                "group name",
                "5555555555",
                function(resp) {
                    assert.equal(resp.code, 200);
                    assert.equal(resp.data.id, 175);
                    done();
                }
            );
        });

        it('should remove an alert group', function(done) {
            E911.remove_alert_group("175", function(resp) {
                assert.equal(resp.code, 200);
                assert.equal(resp.data, "Successfully removed group from 911 service");
                done();
            });
        });

        it('should assign a number to an alert group', function(done) {
            E911.assign_number_to_group(
                "175",
                "12345",
                "",
                "",
                function(resp) {
                    assert.equal(resp.code, 200);
                    assert.equal(resp.data, "Successfully associated 911 service with group");
                    done();
                }
            );
        });

        it('should assign a number to an alert group (error)', function(done) {
            E911.assign_number_to_group(
                "175",
                "",
                "",
                "",
                function(resp) {
                    assert.equal(resp.code, 400);
                    assert.equal(resp.data, "Must provide e911_id or did_id or did_number");
                    done();
                }
            );
        });

        it('should unassign a number from an alert group', function(done) {
            E911.unassign_number_from_group(
                "175",
                "12345",
                "15445",
                "5555555555",
                function(resp) {
                    assert.equal(resp.code, 200);
                    assert.equal(resp.data, "Successfully removed group from 911 service");
                    done();
                }
            );
        });

        it('should add notification endpoint to alert group', function(done) {
            E911.add_notification_to_group(
                "175",
                "sms",
                "some sms value",
                function(resp) {
                    assert.equal(resp.code, 200);
                    assert.equal(resp.data, "Successfully added endpoint to group");
                    done();
                }
            );
        });

        it('should remove notification endpoint from alert group', function(done) {
            E911.remove_notification_from_group(
                "54321",
                function(resp) {
                    assert.equal(resp.code, 200);
                    assert.equal(resp.data, "Successfully removed endpoint from group");
                    done();
                }
            )
        });

        it('should enable/disable conference setting to alert group', function(done) {
            E911.set_alert_group_conference_setting(
                "175",
                "yes",
                function(resp) {
                    assert.equal(resp.code, 200);
                    assert.equal(resp.data, "Successfully set conferences for the group");
                    done();
                }
            );
        });

    });
});
