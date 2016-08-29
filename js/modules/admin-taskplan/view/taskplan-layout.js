define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskPlan = require('../model/taskplan');
    var TaskPlanDetails = require('./taskplan-details');
    var Tasks = require('../../admin-task/view/layout');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-taskplan-taskplan-layout'
        , ui: {
             taskplanDetails:'.taskplan-details-container'
            ,tasks:'.taskplans-container'

        }

        , initialize: function(options) {
            this.taskPlanModel = new TaskPlan({id:options.taskplanId});
        }
        , onRender: function() {
            var self = this;
            this.taskPlanModel.fetch().then(function(){
                self.ui.taskplanDetails.html(new TaskPlanDetails({model: self.taskPlanModel}).render().$el);
                self.ui.tasks.html(new Tasks({model: self.taskPlanModel}).render().$el);
            });
        }
    });
});