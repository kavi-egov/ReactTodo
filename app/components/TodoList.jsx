var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({

  render: function () {

  var {todos, showCompleted, updateTodo} = this.props;

  function renderTodoList() {

    if(todos.length == 0)
      return <h1 className="text-center empty-todos">Add New Todo</h1>
    else {
      return todos.map((todo) => {
          return returnTodoForshowCompleted(todo);
      });
    }
  };

  function returnTodoForshowCompleted(todo){

    if(showCompleted && todo.isCompleted === true)
      return <Todo key={todo.id} {...todo} updateTodo={updateTodo}/>
    else if((showCompleted == undefined || showCompleted === false) && todo.isCompleted == false)
      return <Todo key={todo.id} {...todo} updateTodo={updateTodo}/>
  };

  return <div>{renderTodoList()}</div>
  }
});

module.exports = TodoList;
