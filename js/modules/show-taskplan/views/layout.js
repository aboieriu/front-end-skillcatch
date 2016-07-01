define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var TaskPlanDetails = require('./project-taskPlan-item');
    var TaskPlanModel = require('../models/taskPlanModel');
    var TaskDetails = require('./tasks');
    var TaskModel = require('../models/tasks');



    module.exports = Marionette.Layout.extend({
        id: 'showTaskPlan',
        template: '#show-taskplan-layout',

        regions: {
            showTaskPlan: "#show-project-taskPlan-item",
            showTask:"#show-task"
        },

        initialize: function (options) {
            this.model = new TaskPlanModel({
                groupId:options.groupId,
                taskPlanId:options.taskPlanId
            });
            this.model.fetch();
            this.model = new TaskModel({
                groupId:options.groupId,
                taskPlanId:options.taskPlanId
            });
            this.model.fetch();
        },

        onRender: function (options) {
            var self = this;
            this.model = new TaskPlanModel();
            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId;

            this.model.fetch().then(function(options) {
                self.showTaskPlan.show(new TaskPlanDetails({
                    model: new Backbone.Model(options),
                }));
            });
            this.model = new TaskModel();
            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId + '/task';

            this.model.fetch().then(function(options) {
                self.showTask.show(new TaskDetails({
                    collection: new Backbone.Collection(options),
                    taskPlanId: self.id
                }));
            });

        }
    });
});
