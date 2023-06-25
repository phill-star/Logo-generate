
fs.writeFile(`${shape}.svg`, svgContent, (err) => {
    switch (err) {
      case null:
        console.log(`Generated ${shape}.svg`);
        break;
      default:
        console.error(`Error creating ${shape}.svg:`, err);
    }
  });