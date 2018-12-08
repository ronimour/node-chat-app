const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () =>{
  it('should generate correct message object', ()=> {
    var message = generateMessage('me', 'just some text');
    expect(message.from).toBe('me');
    expect(message.text).toBe('just some text');
    expect(message.createdAt).toExist();
    expect(message.createdAt).toBeA('number');
  });
});
