var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var AddTodo = require('AddTodo');

describe( 'AddTodo ', () => {
  it('should exist ', () => {

    var addTodo = TestUtils.renderIntoDocument(<AddTodo/>);
    expect(addTodo).toExist();
  });

  describe( 'addNewTodo ', () => {
    it('should call addNewTodo function ', () => {

      var formInput = 'kill yourself';
      var spy = expect.createSpy();
      var addTodoFrom = TestUtils.renderIntoDocument(<AddTodo addNewTodo={spy}/>);
      addTodoFrom.refs.todoEntry.value= formInput;

      var $element = $(ReactDOM.findDOMNode(addTodoFrom));
      TestUtils.Simulate.submit($element.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(formInput);
    });

    it('should not call addNewTodo function ', () => {

      var formInput = '';
      var spy = expect.createSpy();
      var addTodoFrom = TestUtils.renderIntoDocument(<AddTodo addNewTodo={spy}/>);
      addTodoFrom.refs.todoEntry.value= formInput;

      var $element = $(ReactDOM.findDOMNode(addTodoFrom));
      TestUtils.Simulate.submit($element.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
