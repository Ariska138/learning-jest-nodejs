require("dotenv").config({ path: './test.env' });
const { sum } = require('./sum.js');

describe('sum', () => {

  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // remove cache
  })

  test('should success', () => {
    expect(sum(1, 3)).toEqual(4);
  })
})
