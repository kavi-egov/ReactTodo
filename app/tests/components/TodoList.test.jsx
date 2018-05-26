var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList ', () => {
  it('should exist ', () => {
    var todoList = TestUtils.renderIntoDocument(<TodoList/>);
    expect(todoList).toExist();
  });

  describe('render function ', () => {
    it('it should render the Todo List ', () => {

      var todos = [
        {
          "id":"1",
          "text":"this is first element"
        },
        {
          "id":"2",
          "text":"this is second element"
        }
      ];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} showCompleted={false}/>);
      var todosResult = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
      expect(todosResult.length).toBe(todos.length);
    });
  });
});
