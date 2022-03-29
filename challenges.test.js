const challenges = require('./challenges.js');

describe("string reversal", function() {
  it("reverses string", function() {
    expect(challenges.reverse('boo')).toBe('oob');
    expect(challenges.reverse('')).toBe('');
    expect(challenges.reverse('abcdefg')).toBe('gfedcba');
  });
});

describe("balanced brackets", function() {
    it("identifies balanced/unbalanced brackets in strings", function() {
        expect(challenges.isBalanced('hello')).toBe(true);
        expect(challenges.isBalanced('(hi) [there]')).toBe(true);
        expect(challenges.isBalanced('(hi [there])')).toBe(true);
        expect(challenges.isBalanced('(((hi)))')).toBe(true);
        expect(challenges.isBalanced('(hello')).toBe(false);
        expect(challenges.isBalanced('(nope]')).toBe(false);
        expect(challenges.isBalanced('((ok) [nope)]')).toBe(false);
    })
})

describe("josephus survival", function() {
    it("returns correct survivor", function() {
        expect(challenges.josephus(10, 3)).toBe(4);
        expect(challenges.josephus(3, 2)).toBe(3);
        expect(challenges.josephus(10, 2)).toBe(5);
        expect(challenges.josephus(10, 4)).toBe(5);
    })
})