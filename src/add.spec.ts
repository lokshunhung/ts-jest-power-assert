import assert = require('power-assert');
import { add } from './add';

describe('add', () => {
    test.each`
        a     | b     | c
        ${1}  | ${1}  | ${2}
        ${20} | ${10} | ${30}
        ${2}  | ${3}  | ${4}
    `('$a + $b = $c', ({ a, b, c }) => {
        assert(add(a, b) === c);
    });
});
