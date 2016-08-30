define(function(require, exports, module) {
    var app = require('app');
    var Marionette = require('marionette');
    var UserBadgesLayout = require('../../badge/view/user-badges-layout');
    var AssignedProjectsLayout = require('../../assigned-project/views/assigned-projects-layout');
    var IndividualTaskPlans = require('../../task-plan/views/individual-task-plan-layout');

    module.exports = Marionette.Layout.extend({
        id: 'home-layout',
        template: '#home-layout',
        regions: {
            userBadges:"#user-badges"
            , assignedProjects: '#assigned-projects'
            , individualTaskPlans: '#individual-task-plans'
        },
        onRender: function () {
            this.userBadges.show(new UserBadgesLayout({model:app.master}));
            this.assignedProjects.show(new AssignedProjectsLayout());
            this.individualTaskPlans.show(new IndividualTaskPlans());
        }
    });
});