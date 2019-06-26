const fs = require('fs');
const { join } = require('path');

function copy(src, dest, callback) {
  fs.readFile(src, { encoding: 'utf8'}, (err, data) => {
    if(err) callback(err);
    fs.writeFile(dest, data, err => {
      callback(err);
    })
  })
}

console.log(join(__dirname, 'test.txt'));

module.exports = {
  copy
}