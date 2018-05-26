var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Todo = require('Todo');
var TodoList = require('TodoList');
var TodoApp = require('TodoApp');

describe('TodoApp ', () => {

  beforeEach(() => {
      localStorage.removeItem('todos');
  });

  it('should exist', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    expect(todoApp).toExist();
  });

  describe('addNewTodo method ', () => {
    it('should add new todo to state ', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      var todosResult = TestUtils.scryRenderedComponentsWithType(todoApp, Todo);

      expect(todosResult.length).toBe(0);
      todoApp.addNewTodo("new Item");
      var todosResult = TestUtils.scryRenderedComponentsWithType(todoApp, Todo);
      expect(todosResult.length).toBe(1);
    });
  });

  describe('updateTodo method ', () => {
    it('should update todo in state ', () => {

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.addNewTodo("new Item");
      expect(todoApp.state.todos[0].isCompleted).toBe(false);
      todoApp.updateTodo("1",true);
      expect(todoApp.state.todos[0].isCompleted).toBe(true);
    });
  });

});
