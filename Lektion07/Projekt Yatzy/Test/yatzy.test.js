//import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight,largeStraight, chance, yatzy } from '../ResultatLogik.js';

describe('Yatzy spil', () => {
    it('udregner ones', () => {
        const counts = [1, 2, 0, 0, 0, 0];
        expect(ones(counts)).to.equal(1);
    });

    it('udregner twos', () => {
        const counts = [0, 2, 0, 0, 0, 0];
        expect(twos(counts)).to.equal(4);
    });

    it('udregner threeSame', () => {
        const counts = [0, 0, 3, 0, 0, 0];
        expect(threeSame(counts)).to.equal(9);
    });

    it('udregner fullHouse', () => {
        const counts = [0, 0, 3, 2, 0, 0];
        expect(fullHouse(counts)).to.equal(17);
    });

    it('udregner smallStraight', () => {
        const counts = [1, 1, 1, 1, 1, 0];
        expect(smallStraight(counts)).to.equal(15);
    });

    it('udregner largeStraight', () => {
        const counts = [0, 1, 1, 1, 1, 1];
        expect(largeStraight(counts)).to.equal(20);
    });

    it('udrregner chance', () => {
        const counts = [1, 1, 1, 1, 1, 1];
        expect(chance(counts)).to.equal(21);
    });

    it('udregner yatzy', () => {
        const counts = [0, 0, 0, 0, 5, 0];
        expect(yatzy(counts)).to.equal(50);
    });
});