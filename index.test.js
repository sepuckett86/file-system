const fs = require('fs');
const { copy } = require('./index');

describe('index functions', () => {
  beforeEach(() => {
    fs.writeFile('test.txt', 'This is a test file.', err => {
      if(err) console.error(err);
    })
  }) 
  afterEach(() => {
    fs.unlink('test.txt', err => {
      if(err) console.error(err);
    })
  })
  it('copies', done => {
    copy('test.txt', 'new-test.txt', () => {
      fs.readFile('new-test.txt', { encoding: 'utf8'}, (err, data) => {
        if(err) console.error(err);
        expect(data).toEqual('This is a test file.');
        done();
      })
    })
  })
})

