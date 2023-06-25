const { generateSVG, promptUser } = require('./lib/shape');

async function main() {
  const text = await promptUser('Enter up to three characters: ');
  const textColor = await promptUser('Enter the text color: ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shape = await promptUser(`Choose a shape (${shapeOptions.join(', ')}): `);
  const shapeColor = await promptUser('Enter the shape color: ');

  generateSVG(text, textColor, shape, shapeColor);
}

main();

