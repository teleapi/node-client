var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: '911',
	endpoint: ''
};

function create(did_id, full_name, address, city, state, zip, options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	if (typeof options == 'undefined') {
		options = {};
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'create';
	var data = {
		did_id: did_id,
		full_name: full_name,
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	if (typeof options.unit_type != 'undefined') {
		data.unit_type = options.unit_type;
	}
	if (typeof options.unit_number != 'undefined') {
		data.unit_number = options.unit_number;
	}
	request(o, data, callback);
}

function info(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'info';
	var data = { did_id: did_id };
	request(o, data, callback);
}

function update(did_id, full_name, address, city, state, zip, options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	if (typeof options == 'undefined') {
		options = {};
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'update';
	var data = {
		did_id: did_id,
		full_name: full_name,
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	if (typeof options.unit_type != 'undefined') {
		data.unit_type = options.unit_type;
	}
	if (typeof options.unit_number != 'undefined') {
		data.unit_number = options.unit_number;
	}
	request(o, data, callback);
}

function remove(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { did_id: did_id };
	request(o, data, callback);
}

function validate(address, city, state, zip, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'validate';
	var data = {
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	request(o, data, callback);
}

function create_alert_group(group_name, callback) {
    callback = callback || function () {};
    var o = clone(opts);
    o.endpoint = 'groups/create';
    var data = {
        group_name: group_name
    };
    request(o, data, callback);
}

function list_alert_groups(callback) {
    callback = callback || function () {};
    var o = clone(opts);
    o.endpoint = 'groups/list';
    request(o, {}, callback);
}

function lookup_alert_group(e911_id, group_id, group_name, did, callback) {
    callback = callback || function () {};
    var o = clone(opts);
    o.endpoint = 'groups/get';
    var data = {
        e911_id: e911_id,
        group_id: group_id,
        group_name: group_name,
        did: did
    };
    request(o, data, callback);
}

function remove_alert_group(group_id, callback) {
    callback = callback || function () {};
    var o = clone(opts);
    o.endpoint = 'groups/remove';
    var data = {
        group_id: group_id
    };
    request(o, data, callback);
}

function assign_number_to_group(group_id, e911_id, did_id, did_number, callback) {
    callback = callback || function () {};
    e911_id = e911_id || false;
    did_id = did_id || false;
    did_number = did_number || false;
    var o = clone(opts);
    o.endpoint = 'groups/assign';
    var data = {
        group_id: group_id
    };
    if (e911_id) { data.e911_id = e911_id; }
    if (did_id) { data.did_id = did_id; }
    if (did_number) { data.did_number = did_number; }
    request(o, data, callback);
}

function unassign_number_from_group(group_id, e911_id, did_id, did_number, callback) {
    callback = callback || function() {};
    e911_id = e911_id || false;
    did_id = did_id || false;
    did_number = did_number || false;
    group_id = group_id || false;
    var o = clone(opts);
    o.endpoint = 'groups/unassign';
    var data = {};
    if (e911_id) { data.e911_id = e911_id; }
    if (did_id) { data.did_id = did_id; }
    if (did_number) { data.did_number = did_number; }
    if (group_id) {data.group_id = group_id; }
    request(o, data, callback);
}

function add_notification_to_group(group_id, endpoint_type, endpoint_value, callback) {
    callback = callback || function() {};
    var o = clone(opts);
    o.endpoint = 'groups/endpoint/add';
    var data = {
        group_id: group_id,
        endpoint_type: endpoint_type,
        endpoint_value: endpoint_value
    };
    request(o, data, callback);
}

function remove_notification_from_group(endpoint_id, callback) {
    callback = callback || function() {};
    var o = clone(opts);
    o.endpoint = 'groups/endpoint/remove';
    var data = {
        endpoint_id: endpoint_id
    };
    request(o, data, callback);
}

function set_alert_group_conference_setting(group_id, enabled, callback) {
    callback = callback || function() {};
    var o = clone(opts);
    o.endpoint = 'groups/conference/set';
    var data = {
        group_id: group_id,
        enabled: enabled
    };
    request(o, data, callback);
}

module.exports = {
    create: create,
    info: info,
    update: update,
    remove: remove,
    validate: validate,
    create_alert_group: create_alert_group,
    list_alert_groups: list_alert_groups,
    lookup_alert_group: lookup_alert_group,
    remove_alert_group: remove_alert_group,
    assign_number_to_group: assign_number_to_group,
    unassign_number_from_group: unassign_number_from_group,
	add_notification_to_group: add_notification_to_group,
	remove_notification_from_group: remove_notification_from_group,
	set_alert_group_conference_setting: set_alert_group_conference_setting
};
