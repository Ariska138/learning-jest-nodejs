require("dotenv").config({ path: './.env.test' });
const { sum } = require('./sum.js');

describe('sum', () => {

  beforeEach(() => {
    jest.resetModules(); // remove cache
  })

  test('should success', () => {
    expect(sum(1, 3)).toEqual(4);
  })
})
