const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Steve Rogers',
      room: 'Avengers'
    },{
      id: '2',
      name: 'Luke Skywalker',
      room: 'Star Wars'
    },{
      id: '3',
      name: 'Tony Stark',
      room: 'Avengers'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for avengers', () => {
    var userList = users.getUserList('Avengers');
    expect(userList).toEqual(['Steve Rogers','Tony Stark']);
  });

  it('should return names for star wars', () => {
    var userList = users.getUserList('Star Wars');
    expect(userList).toEqual(['Luke Skywalker']);
  });

  it('should remove user', () => {
    var removedUser = users.removeUser('1');
    expect(removedUser.name).toEqual(['Steve Rogers']);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var removedUser = users.removeUser('4');
    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should get user', () => {
    var user = users.getUser('1');
    expect(user.name).toEqual(['Steve Rogers']);
  });
  it('should not get user', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });
});
