define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskPlan = require('../model/taskplan');
    var TaskPlanDetails = require('./taskplan-details');
    var Tasks = require('../../admin-task/view/layout');
    var TaskplanBadges=require('./taskPlan-badges-layout');
    var AllBadges=require('../../admin-assignBadgeToTaskPlan/view/layout');


    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-taskplan-taskplan-layout'
        , regions: {
             taskplanDetails:'.taskplan-details-container'
            ,tasks:'.taskplans-container'
            ,badges:'.assigned-badges-container'
            ,allBadges:'.awardBadge-container'

        }

        , initialize: function(options) {
            this.taskPlanModel = new TaskPlan({id:options.taskplanId});
            this.listenTo(this.taskPlanModel,'assignBadgeToTaskPlanEvent',this.render);

        }
        , onRender: function() {
            var self=this;
            this.taskPlanModel.fetch().then(function(){
                self.taskplanDetails.show(new TaskPlanDetails({model:self.taskPlanModel}));
                self.tasks.show(new Tasks({model:self.taskPlanModel}));
                self.badges.show(new TaskplanBadges({model:self.taskPlanModel}));
                self.allBadges.show(new AllBadges({model:self.taskPlanModel}));
            });
        },



    });
});