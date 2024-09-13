import { assert } from 'chai';
import { fem } from '../fem.js';

describe('Test', () => {
    it('Should return five', () => {
        const result = fem();
        assert.equal(result, 5);
    });
});