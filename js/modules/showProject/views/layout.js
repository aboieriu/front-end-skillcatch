define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ProjectDetails = require('./project-details');
    var ProjectModel = require('../models/projectModel');
    var ProjectTaskPlans = require('./project-taskPlans');
    var TaskPlans = require('../models/taskPlans');


    module.exports = Marionette.Layout.extend({
        id: 'showProject',
        template: '#showProject-layout',

        regions: {
            showProject: "#show-project-details",
            showTasks:"#show-project-taskPlan"
        },


        initialize: function (options) {
            var taskPlanModel = new TaskPlans({
                taskPlanId:options.taskPlanId,
                groupId:options.groupId,
                id:options.id
            })
            this.id = options.id;
            this.groupId= options.groupId;
        },
        onRender: function (options) {
            var self = this;
            var projectModel = new ProjectModel({
                id:this.id,
                groupId:this.groupId,
                taskPlanId:this.taskPlanId
            });
            projectModel.fetch().then(function(options) {
                self.showProject.show(new ProjectDetails({
                    model: new Backbone.Model(options)
                }));
            });
            var taskPlans = new TaskPlans();
            taskPlans.id = this.id;
            taskPlans.fetch().then(function(options){
                self.showTasks.show(new ProjectTaskPlans({
                    collection: new Backbone.Collection(options)
                    , groupId: self.id
                }));
                document.getElementById("count-task").innerHTML= taskPlans.length;
            });


        }
    });
});
