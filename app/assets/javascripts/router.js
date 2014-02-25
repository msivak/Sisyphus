// For more information see: http://emberjs.com/guides/routing/
Sis.Router.map(function() {
  this.route('home', { path: '/' });
  this.route('teacher', { path: '/teacher' });
  this.route('course', {path: '/course/:course_id'});
  this.route('project', { path: '/projects/:project_id'});
  
  this.route('userLogin', { path: '/users/login' });
  this.route('registration', { path: '/users/sign_up' });
});

Sis.Router.reopen({
  location: 'history'
});
