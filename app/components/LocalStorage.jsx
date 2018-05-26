var LocalStorage = {

  getTodos: function() {

    var item = localStorage.getItem("todos");
    var todos;
    try {
      todos = JSON.parse(item);
    } catch (e) {
      console.error(" expection in localstorage get item : " + e);
    }
    return todos instanceof Array ? todos : [];
  },

  putTodos: function(todos) {

    if (todos instanceof Array) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return true;
    } else
      return false;
    }
  };

module.exports = LocalStorage;
