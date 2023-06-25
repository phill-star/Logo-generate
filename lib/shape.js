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
