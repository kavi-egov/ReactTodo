var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var myLocalStorage = require('LocalStorage');
describe( 'LocalStorage ', () => {

  beforeEach(() => {
      localStorage.removeItem('todos');
  });

  describe( 'getTodos Func', () => {
    it( 'Should return empty array ', () => {
        expect([]).toEqual(myLocalStorage.getTodos());
    });

    it( 'Should return saved array ', () => {
        var todos = [{"id":"1","text":"say hello to someone","isCompleted":false}];
        myLocalStorage.putTodos(todos);
        expect(todos).toEqual(myLocalStorage.getTodos());
    });
  });

  describe( 'putTodos Func', () => {
    it( 'Should return false ', () => {
        expect(false).toEqual(myLocalStorage.putTodos("wrong data"));
    });

    it( 'Should return true', () => {
        var todos = [{"id":"1","text":"say hello to someone","isCompleted":false}];
        expect(true).toBe(myLocalStorage.putTodos(todos));
        expect(todos).toEqual(myLocalStorage.getTodos());
    });
  });
});




// it( 'Should save map ', () => {
//
// });
