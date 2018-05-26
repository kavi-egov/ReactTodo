var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoFilter = require('TodoFilter');
var LocalStorage = require('LocalStorage');
var Moment = require('moment');

var TodoApp = React.createClass({

  /* * func to add new Todo Element into the existing lists of todos inside the state */
  addNewTodo: function(newName) {

    var todos = this.state.todos;
    var newId = 1;
    if(todos.length>0)
      newId = todos[0].id;

    todos.map((todo) => {
      var num = Number(todo.id);
      if (newId <= num)
        newId = num + 1;
      }
    );
    todos.push({
      "id": newId + '',
      "text": newName,
      "isCompleted": false,
      "createdTime": Moment().unix()
    });
    this.setState({"todos": todos});
  },

  updateTodo: function(id) {

    var {todos} = this.state;
    todos.map((todo) => {
      if(todo.id == id){
        todo.isCompleted = !todo.isCompleted;
        todo.completedTime = todo.isCompleted ? Moment().unix() : undefined;
      }
    });
    this.setState({todos:todos});
  },

  filterTodos: function(filterString, showCompleted) {

    var isFilter = false;
    var filteredTodos = [];

    if (filterString.length > 0) {
      var todos = this.state.todos;
      todos.map((todo) => {
        if (todo.text.includes(filterString))
          filteredTodos.push(todo);
        });
      isFilter = true;
    }
    this.setState(
      {
       isFilter: isFilter,
       filteredTodos: filteredTodos,
       showCompleted: showCompleted
     });
  },

  getInitialState: function() {

    return {
      todos: LocalStorage.getTodos(),
      isFilter: false,
      showCompleted: false
    };
  },

  componentDidUpdate: function() { LocalStorage.putTodos(this.state.todos); },

  render: function () {

    var {todos, isFilter, filteredTodos, showCompleted} = this.state;
    var todosToBeRendered = todos;
    if(isFilter) todosToBeRendered = filteredTodos;

  return <div>
              <h1 className="page-title">React Todo</h1>
              <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">
                  <div className="container">
                    <TodoFilter filterTodos={this.filterTodos}/>
                    <TodoList todos={todosToBeRendered} showCompleted={showCompleted} updateTodo={this.updateTodo}/>
                    <AddTodo addNewTodo={this.addNewTodo}/>
                  </div>
                </div>
              </div>
         </div>;
      }
  });


module.exports = TodoApp;
