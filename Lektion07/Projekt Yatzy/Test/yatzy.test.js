import { assert } from "chai";
import {onePair} from '../ResultatLogik.js';
import { describe } from "mocha";

describe('When onePair is', () => {
it('Should return', () => {
    let result = onePair([1, 0, 2, 0, 1, 1])
    assert.equal(result, 6)
})
})