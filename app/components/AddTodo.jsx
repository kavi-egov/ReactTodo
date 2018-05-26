var React = require('react');

var AddTodo = React.createClass({

  addTodo: function(e) {

    e.preventDefault();
    var newTodo = this.refs.todoEntry.value;
    if (newTodo.length > 0) {
      this.refs.todoEntry.value = '';
      this.props.addNewTodo(newTodo);
    }else
      this.refs.todoEntry.focus();
  },

  render: function() {

    return (
      <div className="container__footer">
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder='add new todo' ref='todoEntry'/>
          <button className="button expanded">ADD</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
