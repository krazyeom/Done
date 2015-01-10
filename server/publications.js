// Meteor.publish('publicLists', function() {
//   return Lists.find({userId: {$exists: false}});
// });

// Meteor.publish('privateLists', function() {
//   if (this.userId) {
//     return Lists.find({userId: this.userId});
//   } else {
//     this.ready();
//   }
// });

Meteor.publish('todos', function() {
  return Todos.find({userId: this.userId}, {sort: {submitted: 1}});
});
