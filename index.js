const fs = require('fs');

function generateSVG(text, textColor, shape, shapeColor) {
  let svgContent;

  
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

