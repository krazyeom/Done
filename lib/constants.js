if (Meteor.App) {
  throw new Meteor.error("Meteor.App already defined.");
}

Meteor.App = {
  NAME: "DONE"
}
