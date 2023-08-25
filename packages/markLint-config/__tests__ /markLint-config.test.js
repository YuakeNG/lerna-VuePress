'use strict';

const marklintConfig = require('../index.json');
const assert = require('assert').strict;

assert.strictEqual(marklintConfig(), 'Hello from marklintConfig');
console.info('marklintConfig tests passed');
