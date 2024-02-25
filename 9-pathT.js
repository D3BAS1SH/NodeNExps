const PATH = require('path')

console.log(PATH.sep);

const filePath= PATH.join('/content','subfolder','text.txt')
console.log(filePath);

console.log(PATH.basename(filePath));

console.log( PATH.resolve(__dirname,'content','subfolder','text.txt'));