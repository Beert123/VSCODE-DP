import { assert } from "chai";
import {onePair} from '../ResultatLogik.js';
import { describe } from "mocha";

describe('When onePair is', () => {
it('Should return', () => {
    let result = onePair([1, 1, 1, 5, 6])
    assert.equal(result, 2)
})
})