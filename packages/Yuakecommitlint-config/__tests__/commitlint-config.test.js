'use strict';

const commitlintConfig = require('../index');
// console.log(commitlintConfig, "commitlintConfig");
const assert = require('assert').strict;

assert.strictEqual(commitlintConfig(), 'Hello from commitlintConfig');
console.info('commitlintConfig tests passed');
