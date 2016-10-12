'use strict';

var test = require('tape');

test('unit: test .handle() and .dispatch()', function(t) {
	var redbloom = require('../index.js')();

	t.plan(16);

	redbloom.handle({ns: 'test', cmd: 'w/ payload'}, function(action, state) {
		t.pass(action.cmd);
		return state.set('cmd', action.cmd).set('payload', action.payload).set('handler', 'w/ payload');
	});

	redbloom.handle({ns: 'test', cmd: 'w/o payload'}, function(action, state) {
		t.pass(action.cmd);
		return state.set('cmd', action.cmd).set('payload', action.payload).set('handler', 'w/o payload');
	});

	redbloom.handle({ns: 'test'}, function(action, state) {
		t.pass(action.cmd);
		return state.set('cmd', action.cmd).set('payload', action.payload).set('handler', 'default');
	});

	redbloom.subscribe(
		newState => {
			switch (newState.get('cmd')) {
			case 'w/ payload':
				t.equal(newState.get('payload'), 'payload');
				t.ok(newState.get('handler') === 'w/ payload' || newState.get('handler') === 'default');
				break;
			case 'w/o payload':
				t.ok(!newState.get('payload'));
				t.ok(newState.get('handler') === 'w/o payload' || newState.get('handler') === 'default');
				break;
			default:
				t.ok(!newState.get('payload'));
				t.ok(!newState.get('cmd'));
				t.ok(newState.get('handler') === 'default');
				break;
			}
		}
	);

	redbloom.dispatch({ns: 'test', cmd: 'w/ payload', payload: 'payload'});
	redbloom.dispatch({ns: 'test', cmd: 'w/o payload'});
	redbloom.dispatch({ns: 'test'});
});
