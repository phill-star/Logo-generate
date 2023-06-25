const { generateSVG } = require('../lib/shapes');
const fs = require('fs');

// Mock the promptUser function
const mockPromptUser = jest.fn();

describe('generateSVG', () => {
  beforeEach(() => {
    mockPromptUser.mockReset();
  });

  test('should generate SVG content for a circle shape', async () => {
    mockPromptUser.mockResolvedValueOnce('MIH');
    mockPromptUser.mockResolvedValueOnce('red');
    mockPromptUser.mockResolvedValueOnce('circle');
    mockPromptUser.mockResolvedValueOnce('blue');
  
    const expectedSvgContent = <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="purple" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">MIH</text>
  </svg>
  
    // Mock fs.writeFile
    fs.writeFile = jest.fn((filename, content, callback) => {
      // Provide your own implementation or assertions for the mock
      callback(null);
    });
  
    await generateSVG('MIH', 'red', 'circle', 'blue');
  
    // Assert the generated file content
    expect(fs.writeFile).toHaveBeenCalledWith('circle.svg', expect.stringContaining(expectedSvgContent), expect.any(Function));
  });
});
