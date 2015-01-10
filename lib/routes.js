Router.configure({
  layoutTemplate: 'layout'
});

Router.route('home', {
  path: "/",
  template: 'home',
  waitOn: function() {
    return [
      Meteor.subscribe('todos')
    ];
  }
  // ,
  // data: function() { return Posts.findOne(this.params._id); }
});

