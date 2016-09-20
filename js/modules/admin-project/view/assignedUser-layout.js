define(function(require, exports, module) {
    var Marionette = require('marionette');
    var User = require('../../admin-user/model/user');
    var Project=require('../model/project');
    var TaskPlans=require('./assignedUser-project-taskPlans-layout');
    var AssignedUserDetails = require('./assignedUser-details');
    var ProjectDetails=require('./assignedUser-project-details');
    var AssignedUserTaskPlans=require('./assignedUser-taskPlan-layout');


    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-assignedUser-layout'
        , regions: {
            assignedUserDetails:'.assignedUserDetails'
            ,userTaskPlans:'.userTaskPlans-container'
            ,userProjectDetails:'.userProjectDetails'
            ,userProjectTaskPlans:'.userProjectTaskPlans-container'
        }

        , initialize: function(options) {
            this.userModel = new User({id:options.userId});
            this.userProjectModel=new Project({id:options.userProjectId})

        }
        , onRender: function() {
            var self = this;
            this.userModel.fetch().then(function() {
                self.assignedUserDetails.show(new AssignedUserDetails({model: self.userModel}));
                self.userTaskPlans.show(new AssignedUserTaskPlans({model: self.userModel}));



            });
            this.userProjectModel.fetch().then(function() {
                self.userProjectDetails.show(new ProjectDetails({model: self.userProjectModel}));
                self.userProjectTaskPlans.show(new TaskPlans({model:self.userProjectModel,userId:self.userModel.id}));
            });


        }

    });
});