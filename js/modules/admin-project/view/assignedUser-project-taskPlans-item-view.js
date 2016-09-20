define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var AssignTaskPlanToUser=require('../model/assignTaskPlanToProjectUser');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-project-assignedUser-project-taskPlans-item-view'
        , className: 'clickable'
        , events: {
            'click .assignTaskPlanToUser':'assignTaskPlanToUser'

        }

        , assignTaskPlanToUser: function() {
            var TaskPlanToAssign=new AssignTaskPlanToUser(this.model);
            TaskPlanToAssign.save().always(function () {
                console.log('Added!');
            });
            Backbone.history.location.reload();
        }
    });
});