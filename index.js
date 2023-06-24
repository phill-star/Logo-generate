const fs = require('fs');

function generateSVG(text, textColor, shape, shapeColor) {
  let svgContent;

  switch (shape) {
    case 'circle':
      svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      break;
    case 'square':
      svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="40" width="160" height="160" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      break;
    case 'triangle':
      svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 20,180 280,180" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      break;
    default:
      console.error('Invalid shape:', shape);
      return;
  }

  fs.writeFile(`${shape}.svg`, svgContent, (err) => {
    switch (err) {
      case null:
        console.log(`Generated ${shape}.svg`);
        break;
      default:
        console.error(`Error creating ${shape}.svg:`, err);
    }
  });
}

function promptUser(prompt) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const text = await promptUser('Enter up to three characters: ');
  const textColor = await promptUser('Enter the text color: ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shape = await promptUser(`Choose a shape (${shapeOptions.join(', ')}): `);
  const shapeColor = await promptUser('Enter the shape color: ');

  generateSVG(text, textColor, shape, shapeColor);
}

main();
