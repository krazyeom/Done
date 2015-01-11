Todos = new Mongo.Collection('todos');

Todos.allow({
});

Date.prototype.yyyymmdd = function() {
 var yyyy = this.getFullYear().toString();
 var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
 var dd  = this.getDate().toString();
 return yyyy + "-" +(mm[1]?mm:"0"+mm[0]) + "-" +(dd[1]?dd:"0"+dd[0]); // padding
};

Date.prototype.hhmm = function() {
 var hh = this.getHours().toString();
 var mm  = this.getMinutes().toString();
 return (hh[1]?hh:"0"+hh[0]) + ":" +(mm[1]?mm:"0"+mm[0]); // padding
};

Meteor.methods({
  addTodo: function(content, id) {
  var d = new Date();
    Todos.insert({
      todo: content,
      userId: Meteor.userId(),
      submitted: d,
      day: d.yyyymmdd(),
      done: 0
    });
  },
  updateTodo: function(content, id) {
    Todos.update({_id: id}, {$set: {todo: content}});
  },
  doneTodo: function(done, id) {
    Todos.update({_id: id}, {$set: {done: done}});
  },
  research: function(day) {
    Todos.find({}, {day: day});
  }
});
