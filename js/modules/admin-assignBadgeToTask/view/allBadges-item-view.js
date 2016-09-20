define(function(require, exports, module) {

    var Marionette = require('marionette');
    var BadgeForTask=require('../model/badge');



    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-assignBadgeToTask-allBadge-item-view'
        , className: 'clickable'
        , events: {
            'click .assignToTask':'assignToTask'
        }



        ,assignToTask: function() {
            var self=this;
            var BadgeToAssign=new BadgeForTask(this.model);
            BadgeToAssign.save().always(function () {
                console.log('Added!');
                self.model.collection.trigger('assignBadgeToTaskEvent');
            });
        },


    });
});

