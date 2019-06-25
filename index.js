const fs = require('fs');

function copy(src, dest, callback) {
  fs.readFile(src, { encoding: 'utf8'}, (err, data) => {
    if(err) callback(err);
    fs.writeFile(dest, data, err => {
      callback(err);
    })
  })
}

module.exports = {
  copy
}