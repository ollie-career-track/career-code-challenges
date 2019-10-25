const data = require('../transactions');
const revenue = require('../revenue');

describe('Revenue function', () => {
  it('returns an object with properly formated date as key', () => {
    const transaction = [{
      price: 1,
      timestamp: 1563459038296
    }];

    const result = revenue(transaction);

    expect(result).toEqual({ 'Thu Jul 18 2019': 1 });
  });

  it.skip('returns an object with formated keys and correct prices', () => {
    const result = revenue(data);
    expect(result).toBe();
  });
});