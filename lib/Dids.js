var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'dids',
	endpoint: ''
};

function states(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'states';
	request(o, {}, callback);
}

function ratecenters(state, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'ratecenters';
	request(o, {state: state}, callback);
}

function list(state, ratecenter, options, callback) {
	options = options || {};
	var data;
	if (typeof options == 'function') {
		callback = options;
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	if (typeof options == 'object') {
		data = options;
	} else {
		data = {};
	}
	request(o, data, callback);
}

function backorder_count(state, ratecenter, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'backorder/count';
	var data = {
		state: state,
		ratecenter: ratecenter
	};
	request(o, data, callback);
}

function cart(did_number, fax, callback) {
	if (typeof fax == 'function') {
		callback = fax;
		fax = false;
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'cart';
	var data = {
		did_number: did_number,
		fax: (fax) ? 1 : 0
	};
	request(o, data, callback);
}

function order(did_number, options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	if (typeof options != 'object') {
		options = {};
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'order';
	request(o, options, callback);
}

function backorder_cart(state, ratecenter, quantity, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'backorder/cart';
	var data = {
		state: state,
		ratecenter: ratecenter,
		quantity: quantity
	};
	request(o, data, callback);
}

module.exports = {
	states: states,
	ratecenters: ratecenters,
	list: list,
	backorder_cart: backorder_count,
	cart: cart,
	order: order,
	backorder_cart: backorder_cart
};
