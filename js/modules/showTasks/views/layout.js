define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var TaskDetails = require('./tasks');
    var TaskModel = require('../models/tasks');



    module.exports = Marionette.Layout.extend({
        id: 'showTask',
        template: '#showTask-layout',

        regions: {
            showTaskPlan: "#show-project-taskPlan-item",
            showTask:"#show-task"
        },

        initialize: function (options) {
            this.model = new TaskModel({
                groupId:options.groupId,
                taskPlanId:options.taskPlanId
            });
            this.model.fetch();
        },

        onRender: function (options) {
            var self = this;
            this.model = new TaskModel();
            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId + '/task';

            this.model.fetch().then(function(options) {
                self.showTask.show(new TaskDetails({
                    collection: new Backbone.Collection(options)
                }));
            });
            var taskModel = new TaskModel()
            taskModel.fetch().then(function(){
                document.getElementById("count-tasks").innerHTML = "dasda";
            });

        }
    });
});
