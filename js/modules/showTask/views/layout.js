define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var taskDetails = require('./project-task-item');
    var taskModel = require('../models/taskModel');
    var badgeDetails = require('./badges');
    var badgeModel = require('../models/badges');



    module.exports = Marionette.Layout.extend({
        id: 'showTask',
        template: '#showTask-layout',

        regions: {
            showTask: "#show-task",
            showBadge:"#show-badge"
        },

        initialize: function (options) {
            this.model = new taskModel({
                groupId:options.groupId,
                taskPlanId:options.taskPlanId,
                taskId:options.taskId
            });
            this.model.fetch();
            this.model = new badgeModel({
                groupId:options.groupId,
                taskPlanId:options.taskPlanId,
                taskId:options.taskId
            });
            this.model.fetch();
        },

        onRender: function (options) {
            var self = this;
            this.model = new taskModel();
            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId + '/task/' + this.options.taskId;

            this.model.fetch().then(function(options) {
                self.showTask.show(new taskDetails({
                    model: new Backbone.Model(options),
                }));
            });
            this.model = new badgeModel();
            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId + '/task/' + this.options.taskId + '/badge' ;

            this.model.fetch().then(function(options) {
                self.showBadge.show(new badgeDetails({
                    collection: new Backbone.Collection(options),
                    badgeId: self.id
                }));
            });

        }
    });
});
