Sis.User = DS.Model.extend({
  type: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  projects: DS.hasMany('project'),
  phone: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  // Computed Propeties
  fullName: function(key, value) {
    if (this.get('firstName') && this.get('lastName')) {
      return this.get('firstName') + ' ' + this.get('lastName');
    } else {
      return '';
    }
  }.property('firstName', 'lastName'),
  isTeacher: function() {
    return this.get('type') === "Teacher";
  }.property('type'),
  isStudent: function() {
    return this.get('type') === "Student";
  }.property('type'),
});

Sis.Student = Sis.User.extend({
  projectGroups: DS.hasMany('projectGroup'),
  subtasks: DS.hasMany('subtask'),

  completedSubtasks: function() {
    return this.get('subtasks').filterBy('isCompleted').get('length');
  }.property('subtasks.@each.isCompleted')
});

Sis.Teacher = Sis.User.extend({
  courses: DS.hasMany('course', { async: true })
});
