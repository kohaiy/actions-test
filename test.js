const fs = require('fs');
const path = require('path');

const argv = process.env;
console.log(argv);
fs.writeFileSync(path.join(__dirname, 'argv.json'), JSON.stringify(argv, null, '  '));
console.log('write file success');