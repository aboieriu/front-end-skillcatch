define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var User=require('../../admin-project/model/assignTaskPlanToProjectUser');



    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-assignIndividualTaskPlans-taskplans-item-view'
        , className: 'clickable'
        , events: {
            'click .assignIndividualTaskPlan':'assignIndividualTaskPlan'
            ,'click .removeIndividualTaskPlan':'removeIndividualTaskPlan'

        }

        ,assignIndividualTaskPlan: function() {
            var self=this;
            var TaskPlanToAssign=new User(this.model);
            TaskPlanToAssign.save().always(function () {
                console.log('Added!');
                self.model.collection.trigger('assignIndividualTaskPlanEvent');
            });
        },
        removeIndividualTaskPlan:function (ev) {
            ev.stopPropagation();
            this.model.destroy();
        }
    });
});

