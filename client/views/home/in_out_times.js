Template['in_out_times'].helpers({

});

Template['in_out_times'].events({
  'click a#in-time': function(e, template) {
    if (Meteor.user() == null) {
      alert("로그인 해주세요.");
      return;
    }

    var day = Session.get("selected_day");
    if (day == undefined) {
      alert("먼저 날짜를 선택해주세요.");
      return;
    }
    Meteor.call('addInTime');
  },
  'click a#out-time': function(e, template) {
    if (Meteor.user() == null) {
      alert("로그인 해주세요.");
      return;
    }

    var day = Session.get("selected_day")
    if (day == undefined) {
      alert("먼저 날짜를 선택해주세요.");
      return;
    }
    Meteor.call('addOutTime', day);
  }
});
