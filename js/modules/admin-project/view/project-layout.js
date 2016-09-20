define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Project = require('../model/project');
    var ProjectDetails = require('./project-details');
    var Taskplans = require('../../admin-taskplan/view/layout');
    var Users=require('../view/project-users-layout');
    var UsersToAssign=require('../../admin-assignUsersToProject/view/layout');



    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-project-layout'
        , regions: {
              taskPlans:'.taskplans-container'
            , projectDetails:'.project-details-container'
            , users:'.project-users'
            , usersToAssign:'.users-to-assign'

        }

        , initialize: function(options) {
            this.projectModel = new Project({id:options.projectId});
            this.listenTo(this.projectModel,'assignUserEvent',this.render);
        }
        , onRender: function() {
            var self = this;
            this.projectModel.fetch().then(function(){
                self.projectDetails.show(new ProjectDetails({model: self.projectModel}));
                self.taskPlans.show(new Taskplans({model: self.projectModel}));
                self.users.show(new Users({model:self.projectModel}));
                self.usersToAssign.show(new UsersToAssign({model:self.projectModel}));

            });
        }
    });
});