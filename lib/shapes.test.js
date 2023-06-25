const Shapes = require('./test');

describe('Shapes', () => {
  test('should pass a basic test', () => {
    const sum = 1 + 2;
    expect(sum).toBe(3);
  });

  test('should have a sum method that returns the sum of two numbers', () => {
    const shapes = new Shapes();
    const result = shapes.sum(3, 4);
    expect(result).toBe(7);
  });
});
