# RedBloom

[![npm](https://img.shields.io/npm/v/redbloom.svg?maxAge=2592000)](https://npmjs.com/package/redbloom) [![node](https://img.shields.io/node/v/redbloom.svg?maxAge=2592000)](https://npmjs.com/package/redbloom) [![David](https://img.shields.io/david/eq8/redbloom.svg?maxAge=2592000)](https://david-dm.org/eq8/redbloom) [![Travis](https://travis-ci.org/eq8/redbloom.svg?branch=master)](https://travis-ci.org/eq8/redbloom) [![codecov](https://codecov.io/gh/eq8/redbloom/branch/master/graph/badge.svg)](https://codecov.io/gh/eq8/redbloom)

- a minimal implementation of Redux;
- with an RxJS interface;
- built-in ImmutableJS store; and,
- pattern matching for dispatching actions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Installation](#installation)
- [Example](#example)
- [API](#api)
  - [redbloom([initialState], [opts])](#redbloominitialstate-opts)
  - [instance.handle(pattern, reducer)](#instancehandlepattern-reducer)
  - [instance.dispatch(action)](#instancedispatchaction)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

```
npm install --save redbloom
```

## Example

```
var redbloom = require('redbloom')();

redbloom.handle({ns: 'test', cmd: 'w/ payload'}, function(action, state) {
	return state
		.set('cmd', action.cmd)
		.set('payload', action.payload)
		.set('handler', 'w/ payload');
});

redbloom.handle({ns: 'test', cmd: 'w/o payload'}, function(action, state) {
	return state
		.set('cmd', action.cmd)
		.set('payload', action.payload)
		.set('handler', 'w/o payload');
});

redbloom.handle({ns: 'test'}, function(action, state) {
	return state
		.set('cmd', action.cmd)
		.set('payload', action.payload)
		.set('handler', 'default');
});

redbloom.subscribe(newState => console.log('newState:', newState));

redbloom.dispatch({ns: 'test', cmd: 'w/ payload', payload: 'payload'});
redbloom.dispatch({ns: 'test', cmd: 'w/o payload'});
redbloom.dispatch({ns: 'test'});

// OUTPUTS
// -------
// newState: Map { "cmd": "w/ payload", "payload": "payload", "handler": "w/ payload" }
// newState: Map { "cmd": "w/ payload", "payload": "payload", "handler": "default" }
// newState: Map { "cmd": "w/o payload", "payload": undefined, "handler": "w/o payload" }
// newState: Map { "cmd": "w/o payload", "payload": undefined, "handler": "default" }
// newState: Map { "cmd": undefined, "payload": undefined, "handler": "default" }
```

## API

### redbloom([initialState], [opts])

Creates a new instance of redbloom which is basically an RxJS Observable.

Options are:

* `indexing`: it can be either `insertion` (default) or `depth`;
  - if set to `insertion`, it will try to match entries in insertion order;
  - if set to `depth`, it will try to match entries with the most
  properties first.

### instance.handle(pattern, reducer)

Assigns a reducer for an action pattern.

* `pattern`: an object for which a dispatched action is matched to - e.g. the pattern `{ns: 'namespace', cmd: 'command'}` would match the action `{ns: 'namespace', cmd: 'command', payload: {key: 'value'}}`
* `reducer`: ideally a pure function used for state transitions - e.g. `function(action, currentState) { ... return newState; }`

### instance.dispatch(action)

Looks up the appropriate reducer for the action and applies it to the current state of the system.

* `action`: an object - e.g. `{ns: 'namespace', cmd: 'command', payload: {key: 'value'}}`
