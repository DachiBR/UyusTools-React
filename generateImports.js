const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets/Product_Pics');
const outputPath = path.join(__dirname, 'src/container/productadditions/product-cards/import.js');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const imports = [];
  const exports = [];

  files.forEach((file, index) => {
    if (['.png', '.jpg', '.jpeg'].includes(path.extname(file))) {
      const variableName = `product${index.toString().padStart(2, '0')}`;
      imports.push(`import ${variableName} from '../../../assets/Product_Pics/${file}';`);
      exports.push(`${variableName}`);
    }
  });

  const fileContent = `${imports.join('\n')}\n\nexport {\n  ${exports.join(',\n  ')}\n};`;

  fs.writeFile(outputPath, fileContent, (err) => {
    if (err) {
      return console.log('Error writing file: ' + err);
    }
    console.log('Import file generated successfully!');
  });
});
