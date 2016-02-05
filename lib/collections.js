/*
Meteor.users.helpers({
  lastLoginTime: function() {
    if(!this.status || !this.status.lastLogin) return '';
    return moment(this.status.lastLogin.date).format('YYYY-MM-DD HH:mm');
  },
  lastActivityTime: function() {
    if(!this.status || !this.status.lastActivity) return '';
    return moment(this.status.lastActivity).format('YYYY-MM-DD HH:mm:ss');
  },
  userAgent: function() {
    if(!this.status || !this.status.lastLogin) return 'none';
    var ua = this.status.lastLogin.userAgent;
    var results = new UAParser().setUA(ua).getResult();
    return results.browser.name + " " + results.browser.version + ' / ' + results.os.name + " " + results.os.version;
  },
  email: function() {
    if(!this.emails || !this.emails[0]) return 'none';
    return this.emails[0].address;
  },
  loginTokens: function() {
    if(!this.services || !this.services.resume || !this.services.resume.loginTokens) return 'none';
    return this.services.resume.loginTokens.length;
  }
});
 */
