// A constructor Shapes is created.
function Shapes() {}
test('should pass a basic test', () => {
    const sum = 1 + 2;
    expect(sum).toBe(3);
  });
  

// Constructor Shapes is given a sum method that returns two numbers added together.
Shapes.prototype.sum = (a, b) => {
  return a + b;
};

// Constructor Shapes is exported from the file.
module.exports = Shapes;
