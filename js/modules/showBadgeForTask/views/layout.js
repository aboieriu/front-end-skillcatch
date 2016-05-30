define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var BadgeDetails = require('./badges');
    var BadgeModel = require('../models/badges');



    module.exports = Marionette.Layout.extend({
        id: 'showBadgeForTask',
        template: '#showBadgeForTask-layout',

        regions: {
            showBadge:"#show-badge"
        },

        initialize: function (options) {
            this.model = new BadgeModel({
                groupId:options.groupId,
                taskPlanId:options.taskPlanId,
                taskId:options.taskId
            });
            this.model.fetch();
        },

        onRender: function (options) {
            var self = this;
            this.model = new BadgeModel();
            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId + '/task/' + this.options.taskId + '/badge';

            this.model.fetch().then(function(options) {
                self.showBadge.show(new BadgeDetails({
                    collection: new Backbone.Collection(options)
                }));
            });
            var taskModel = new BadgeModel()
            taskModel.fetch().then(function(){
                document.getElementById("count-tasks").innerHTML = "dasda";
            });

        }
    });
});
