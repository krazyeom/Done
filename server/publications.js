Meteor.publish('todos', function() {
  return Todos.find({userId: this.userId}, {sort: {submitted: 1}});
});

Meteor.publish('inouttime', function() {
  return InOutTimes.find({userId: this.userId});
});
