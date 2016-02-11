Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'layout',

  // the appNotFound template is used for unknown routes
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  title: 'Memory Cards',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
      //Meteor.subscribe('users', Meteor.userId()),
    ];
  }

});

Router.route('/', {
  name: 'home',
  action: function() {
    Router.go('memoryCards');
  }
});

