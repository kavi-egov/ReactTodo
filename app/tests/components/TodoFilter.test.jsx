var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoFilter = require('TodoFilter');

describe('TodoFilter ', () => {
  it('should exist', () => {
    var todoFilter = TestUtils.renderIntoDocument(<TodoFilter/>);
    expect(todoFilter).toExist();
  });

  describe('onSearch Func ', () => {
    it('should call spy ', () => {

      var formInput = 'kill yourself';
      var spy = expect.createSpy();
      var todoFilter = TestUtils.renderIntoDocument(<TodoFilter filterTodos={spy}/>);
      todoFilter.refs.filterValue.value= formInput;
      todoFilter.refs.showcompleted.checked = true;

      TestUtils.Simulate.change(todoFilter.refs.filterValue);
      expect(spy).toHaveBeenCalledWith(formInput,true);
    });

    it('should not call spy ', () => {

      var formInput = '';
      var spy = expect.createSpy();
      var todoFilter = TestUtils.renderIntoDocument(<TodoFilter filterTodos={spy}/>);
      todoFilter.refs.filterValue.value= formInput;

      var $element = $(ReactDOM.findDOMNode(todoFilter));
      TestUtils.Simulate.change($element.find('input')[0]);
      expect(spy).toHaveBeenCalledWith(formInput,false);
    });
  });
});
