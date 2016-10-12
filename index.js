/*
 * redbloom
 * Copyright(c) 2016 Benjamin Bartolome
 * Apache 2.0  Licensed
 */

'use strict';

module.exports = redbloom;

var ee = require('event-emitter');

var Immutable = require('immutable');
var Rx = require('rx');

function redbloom(initialState, options) {
	var state = Immutable.Map(initialState || {}); // eslint-disable-line new-cap
	var instance = ee({});

	var bloomrun = require('bloomrun')(options);

	bloomrun.default((action, currentState) => {
		return currentState;
	});

	var observable = Rx.Observable
		.fromEvent(instance, 'dispatch')
		.concatMap(action => {
			return Rx.Observable
				.from(bloomrun.list(action))
				.map(reducer => reducer.bind(observable, action));
		})
		.scan((currentState, reducer) => reducer(currentState), state);

	observable.handle = (action, reducer) => bloomrun.add(action, reducer);
	observable.dispatch = action => instance.emit('dispatch', action);

	return observable;
}
