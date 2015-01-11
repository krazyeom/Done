InOutTimes = new Mongo.Collection('inouttime');

InOutTimes.allow({
});

Meteor.methods({
  addInTime: function() {
    var d = new Date();
    var day = InOutTimes.find({}, {day: d.yyyymmdd()}).fetch();

    if (!day.length) {
      InOutTimes.insert({
        userId: Meteor.userId(),
        submitted: d,
        day: d.yyyymmdd(),
        intime: d.hhmm(),
      });
    }
  },
  addOutTime: function(day) {
    var d = new Date();
    InOutTimes.update({day: day}, {$set: {outtime: d.hhmm()}}, {multi: true});
  }
});
