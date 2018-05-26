var React = require('react');
var Moment = require('moment');

var Todo = React.createClass({

  updateTodo: function(e) {

    this.props.updateTodo(this.props.id);
  },

  render: function() {
    var {id, text, isCompleted, createdTime, completedTime} = this.props;
    var className = isCompleted === true ? "todo-completed" : "todo";

    function getTimeStamp () {
      if(completedTime)
        return "Completed @ " + Moment.unix(completedTime).format('MMM Do YYYY @ h:mm A');
      else  return "Created @ " + Moment.unix(createdTime).format('MMM Do YYYY @ h:mm A');
    };

    return (

    <div className={className} onClick={this.updateTodo}>
      <div className="checker">
      <input type="checkbox" checked={isCompleted} readOnly={true}/>
      </div>
      <div>
        <p>{id}. {text}</p>
        <p className="todo_subtext">{getTimeStamp()}</p>
      </div>
    </div>
    );
  }
});

module.exports = Todo;
