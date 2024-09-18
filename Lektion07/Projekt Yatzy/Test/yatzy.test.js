import { assert } from "chai";
import {fourOfAKind, onePair, smallStraightScore} from '../ResultatLogik.js';
import { describe } from "mocha";

describe('All results', () => {
it('OnePair', () => {
    let result = onePair([1, 0, 2, 0, 1, 1])
    assert.equal(result, 6)
})

it('FourOfAKind', () => {
    let result = fourOfAKind([1, 0, 4, 0, 0, 0])
    assert.equal(result, 12)
})

it('SmallStraightScore', () => {
    let result = smallStraightScore([1, 1, 1, 1, 1, 0])
    assert.equal(result, 15)
})

it('LargeStraightScore', () => {
    let result = smallStraightScore([1, 1, 0, 1, 1, 1])
    assert.equal(result, 0)
})
})