var React = require('react');

var TodoFilter = React.createClass({

  onSearch: function(e) {

    var filterString = this.refs.filterValue.value;
    var showCompleted = this.refs.showcompleted.checked;
    this.props.filterTodos(filterString, showCompleted);
  },

  render: function() {

    return (
      <div className="container__header">
        <div>
          <input type="search" placeholder="search todos" ref="filterValue" onChange={this.onSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showcompleted" onChange={this.onSearch}></input> Only Completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoFilter;
