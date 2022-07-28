require("dotenv").config({ path: './.env.test' });
import { sum } from './sum.js';

import axios from 'axios';
jest.mock('axios');
import { getTitle } from './ConnectApi';

describe('sum', () => {

  beforeEach(() => {
    jest.resetModules(); // remove cache
  })

  test('should success', () => {
    expect(sum(1, 3)).toEqual(4);
  })
});


describe('test_api', () => {
  test('get title', async () => {
    let dataMock = {
      error: false,
      message: 'OK',
      data: [
        { title: 'test' },
        { title: 'test2' }
      ]
    }

    axios.get.mockResolvedValueOnce(dataMock);

    let title = await getTitle();

    expect(title).toEqual('test');

  })

})