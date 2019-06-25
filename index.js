const fs = require('fs');

fs.readFile('./hi.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log(data);
});

const data = new Uint8Array(Buffer.from('Hello Node.js'));
const data2 = 'My message';

fs.writeFile('message.txt', data2, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

