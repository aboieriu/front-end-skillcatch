define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Project = require('../model/project');
    var ProjectDetails = require('./project-details');
    var Taskplans = require('../../admin-taskplan/view/layout');
    var Users=require('../../admin-project-users/view/layout');
    var UsersToAssign=require('../../admin-assignUsersToProject/view/layout');



    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-project-layout'
        , ui: {
              taskPlans:'.taskplans-container'
            , projectDetails:'.project-details-container'
            , users:'.project-users'
            , usersToAssign:'.users-to-assign'

        }

        , initialize: function(options) {
            this.taskPlanModel = new Project({id:options.projectId});
        }
        , onRender: function() {
            var self = this;
            this.taskPlanModel.fetch().then(function(){
                self.ui.projectDetails.html(new ProjectDetails({model: self.taskPlanModel}).render().$el);
                self.ui.taskPlans.html(new Taskplans({model: self.taskPlanModel}).render().$el);
                self.ui.users.html(new Users({model:self.taskPlanModel}).render().$el);
                self.ui.usersToAssign.html(new UsersToAssign({model:self.taskPlanModel}).render().$el);

            });
        }
    });
});