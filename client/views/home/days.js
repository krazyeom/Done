Template['day'].helpers({
  days: function() {
    var todos = Todos.find({}).fetch();
    var groupedDays = _.groupBy(_.pluck(todos, 'day'));

    var keys = [];
    var hasToday = false;
    var d = new Date();
    var today = d.yyyymmdd();

    for (var k in groupedDays) {
      keys.push({day: k})
      if (k === today) {
        hasToday = true;
      }
    };

    if (!hasToday) {
       keys.push({day: today});
    }

    return _.sortBy(keys, "day").reverse();
  },
  selected: function() {
    var day = Session.get("selected_day");
    var input = $("#" + day);
    var id = $(input).attr('id');
    return this.day === id ? 'bg-danger' : '';
  },
  intime: function() {
    // var day = Session.get("selected_day");
    var day = InOutTimes.findOne({}, {day: this.day});
    return day == undefined ? "NY" : day.intime;
  },
  outtime: function() {
    // var day = Session.get("selected_day");
    var day = InOutTimes.findOne({}, {day: this.day});
    return day == undefined ? "NY" : day.outtime;
  }
});

Template['day'].events({
  'click .day': function(e, template) {
    Session.set("selected_day", this.day);
  }
});

Template['day'].rendered = function() {
  $(function() {
    $.material.init();
  });
}
