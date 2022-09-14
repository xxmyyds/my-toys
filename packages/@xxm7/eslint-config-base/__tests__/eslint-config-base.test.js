'use strict';

const eslintConfigBase = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintConfigBase(), 'Hello from eslintConfigBase');
console.info("eslintConfigBase tests passed");
