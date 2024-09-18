import { assert } from "chai";
import {chanceScore, fourOfAKind, fullHouse, LargeStraightScore, onePair, smallStraightScore, yatzyScore} from '../ResultatLogik.js';
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
    let result = LargeStraightScore([1, 1, 0, 1, 1, 1])
    assert.equal(result, 0)
})

it('FullHouse', () => {
    let result = fullHouse([0, 2, 0, 0, 3, 0])
    assert.equal(result, 19)
})

it('ChanceScore', () => {
    let result = chanceScore([0, 1, 0, 1, 2, 1])
    assert.equal(result, 22)
})

it('YatzyScore', () => {
    let result = yatzyScore([0, 0, 0, 5, 0, 0])
    assert.equal(result, 50)
})
})