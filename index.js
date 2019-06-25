const fs = require('fs');

fs.readFile('./hi.txt', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  fs.writeFile('./new-file.txt', data, (err) => {
    if (err) throw err;
  })
})