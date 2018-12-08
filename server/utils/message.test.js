const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () =>{
  it('should generate correct message object', ()=> {
    var message = generateMessage('me', 'just some text');
    expect(message.from).toBe('me');
    expect(message.text).toBe('just some text');
    expect(message.createdAt).toExist();
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () =>{
  it('should generate correct location object', ()=> {
    var message = generateLocationMessage('me', 1, 1);
    expect(message.from).toBe('me');
    expect(message.url).toBe('https://www.google.com/maps?q=1,1');
  });
});
