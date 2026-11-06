import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../src/core.js';
test('transposes all twelve bars and minor voicing',()=>{assert.equal(c.progression(2,'Quick change')[1].root,7);assert.equal(c.progression(0,'Minor blues').length,12);assert.deepEqual(c.voicing(0,'m7'),[48,51,55,58]);assert.throws(()=>c.progression(12,'bad'))});
