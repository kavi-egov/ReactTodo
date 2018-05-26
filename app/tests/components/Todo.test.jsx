var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Todo = require('Todo');

describe('Todo ', () => {
  it('should exist', () => {
    var todo = TestUtils.renderIntoDocument(<Todo/>);
    expect(todo).toExist();
  });

  describe('render ', () => {
    it('should render the data ', () => {
      var todoElement = {
        "id":"1",
        "text":"hello test"
      };
      var todo = TestUtils.renderIntoDocument(<Todo key={todoElement.id} {...todoElement}/>);
      expect(todo.props.id).toBe('1');
      expect(todo.props.text).toBe('hello test');
    });
  });

    describe('updateTodo func ', () => {
      it('should call spy ', () => {

        var todoElement = {
          "id":"1",
          "text":"hello test",
          "isCompleted": false
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo key={todoElement.id} {...todoElement} updateTodo={spy}/>);
        todo.refs.todoCheck.checked = true;
        TestUtils.Simulate.change(todo.refs.todoCheck);
        expect(spy).toHaveBeenCalledWith("1",true);
      });
    });
});
