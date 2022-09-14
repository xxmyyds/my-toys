'use strict';

const eslintConfigVue = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintConfigVue(), 'Hello from eslintConfigVue');
console.info("eslintConfigVue tests passed");
