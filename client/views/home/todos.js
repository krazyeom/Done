Template['todo'].helpers({
  todos: function() {
    var day = Session.get("selected_day");
    if (day) {
      return Todos.find({done: 0, day: day}, {sort: {submitted: -1}});
    }
    return Todos.find({done: 0}, {sort: {submitted: -1}});
  },
  editing: function(_id) {
    // console.log(_id);
    return Session.get("key" + _id);
  },
  todos_count: function() {

    return Todos.find({done: 0}).count() === 0 ? false : true;
  },
  is_today: function() {
    var day = Session.get("selected_day");
    var d = new Date();
    return day === d.yyyymmdd();
  }
});

Template['todo'].events({
  'click .todo': function (e, template) {
    Session.set("key" + this._id, true);
    Deps.flush(); // force DOM redraw, so we can focus the edit field
    var input = template.find(".edit-input." + this._id);
    input.focus();
    input.select();
  },
  'focusout .edit-input': function(e, template) {
    var input = template.find(".edit-input." + this._id);
    var todo = $(input).val();
    Meteor.call('updateTodo', todo, this._id);

    Session.set("key" + this._id, false);
  },
  'keypress input.edit-input': function(e, template) {
    if (e.which === 13) {
      var input = template.find(".edit-input." + this._id);
      $(input).focusout();
    }
  },
  'keypress input#new-todo': function(e, template) {
    if (e.which === 13) {
      var input = template.find("#new-todo");
      var todo = $(input).val();
      if (todo == undefined || todo == '' || todo.trim().length === 0 || todo.trim() === '') {
        alert('할일을 입력해주세요.');
        return false;
      }

      Meteor.call('addTodo', todo, this._id);
      $(input).val('');
    }
  },
  'click button.add': function(e, template) {
    Meteor.call('doneTodo', 1, this._id);
  }
});
