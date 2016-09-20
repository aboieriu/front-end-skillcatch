define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var TaskPlan=require('../model/taskplan');

    module.exports = Marionette.ItemView.extend({
        template: '#admin-taskplan-taskplan-details-view'
        , ui: {
            taskPlanName: '#taskPlanName'
            , taskPlanDescription: '#taskPlanDescription'
        }
        , events: {
            'click #taskPlanEditButton':'editTaskPlan'
        },
        initialize:function (options) {
            this.taskPlan=options.model;
            this.targetTaskPlanModel=new TaskPlan({id:options.model.id});
            this.listenTo(this.taskPlan, 'sync', this.render);

        },

        editTaskPlan:function () {
            var self = this;
            var targetTaskPlanModel = {
                name: this.ui.taskPlanName.val()
                , description: this.ui.taskPlanDescription.val()
            };

            this.targetTaskPlanModel.set(targetTaskPlanModel);
            this.targetTaskPlanModel.save().always(function () {
                self.taskPlan.fetch();
            })
        }
    });
});
