Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('home', {
  path: "/",
  template: 'home',
  waitOn: function() {
    return [
      Meteor.subscribe('todos'), Meteor.subscribe('inouttime')
    ];
  }
});

