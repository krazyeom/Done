Template['day'].helpers({
  days: function() {
    var todos = Todos.find({}).fetch();
    var groupedDays = _.groupBy(_.pluck(todos, 'day'));

    var keys = [];
    for (var k in groupedDays) {
      keys.push({day: k})
    };
    return _.sortBy(keys, "day").reverse();
  },
  selected: function() {
    var day = Session.get("selected_day");
    if (day)
    var input = $("#" + day);
    var id = $(input).attr('id');
    return this.day === id ? 'bg-danger' : '';
  }
});

Template['day'].events({
  'click .day': function(e, template) {
    Session.set("selected_day", this.day);
  }
});
