'use strict';

const eslintConfigTs = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintConfigTs(), 'Hello from eslintConfigTs');
console.info("eslintConfigTs tests passed");
