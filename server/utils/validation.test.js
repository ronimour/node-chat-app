const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () =>{
  it('should reject non-string values', ()=> {
    expect(isRealString(1)).toBe(false);
    expect(isRealString(true)).toBe(false);
    expect(isRealString({name:'test'})).toBe(false);
  });
  it('should reject string with only spaces', ()=> {
    expect(isRealString('   ')).toBe(false);
    expect(isRealString('')).toBe(false);
  });
  it('should allow string with non-spaces', ()=> {
    expect(isRealString('test')).toBe(true);
    expect(isRealString('test test')).toBe(true);
    expect(isRealString(' test ')).toBe(true);
    expect(isRealString(' test')).toBe(true);
    expect(isRealString('test ')).toBe(true);
    expect(isRealString('#')).toBe(true);
  });
});
