Template.contacts.helpers({
  players: function () {
    return Meteor.users.find();
  }
});