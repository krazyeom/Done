Template['done_todo'].helpers({
  done_todos: function() {
    var day = Session.get("selected_day");
    if (day) {
      return Todos.find({done: 1, day: day});
    }
    return Todos.find({done: 1});
  },
  nothing_done:  function() {
    var todo_c = Todos.find({done: 0}).fetch().length;
    var done_c = Todos.find({done: 1}).fetch().length;
    return todo_c > 0 && done_c === 0 ? true : false;
  }
});

Template['done_todo'].events({
  'click button.del': function(e, template) {
    Meteor.call('doneTodo', 0, this._id);
  }
});
