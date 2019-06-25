const fs = require('fs');
const { copy } = require('./index');
const { join } = require('path');

describe('index functions', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, 'test.txt'), 'This is a test file.', done);
  }) 
  afterEach(done => {
    fs.unlink(join(__dirname, 'test.txt'), err => {
      fs.unlink('new-test.txt', done)
    })
  })
  it('copies', done => {
    const src = join(__dirname, 'test.txt');
    const dest = join(__dirname, 'new-test.txt');
    copy(src, dest, err => {
      expect(err).toBeFalsy();
      fs.readFile(dest, { encoding: 'utf8'}, (err, data) => {
        expect(data).toEqual('This is a test file.');
        done(err);
      })
    })
  })
})

