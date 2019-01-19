// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const adder = require('../adder');

// unit tests for our `adder` function
describe('adder', function() {
  it('should add two numbers', function() {
    const normalCases = [
      {a: 2, b: 3, expected: 5},
      {a: 200, b: 2000, expected: 2200},
      {a: 2, b: -5, expected: -3}
    ];
    normalCases.forEach(function(input) {
      const answer = adder(input.a, input.b);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});