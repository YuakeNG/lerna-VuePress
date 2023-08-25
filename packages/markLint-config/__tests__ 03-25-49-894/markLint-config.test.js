'use strict';

const marklintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(marklintConfig(), 'Hello from marklintConfig');
console.info('marklintConfig tests passed');
