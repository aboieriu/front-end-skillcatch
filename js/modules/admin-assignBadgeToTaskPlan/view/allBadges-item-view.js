define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Badge=require('../model/badge');


    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-assignBadgeToTaskPlan-allBadge-item-view'
        , className: 'clickable'
        , events: {
            'click .assignToTaskPlan':'assignToTaskPlan'

        }

        ,assignToTaskPlan: function() {
            var self=this;
            this.model.set({gained:false});
            var BadgeToAssign=new Badge(this.model);
            BadgeToAssign.save().always(function () {
                console.log('Added!');
                self.model.collection.trigger('assignBadgeToTaskPlanEvent');
            });
        },
    });
});

