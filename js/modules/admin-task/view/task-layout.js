
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Task = require('../model/task');
    var TaskDetails = require('./task-details');
    var Badges = require('./task-badges-layout');
    var AssignBadge = require('../../admin-assignBadgeToTask/view/layout');


    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-task-task-layout'
        ,regions: {
            taskDetails:'.task-details-container'
            , badges:'.assignBadges'
            , unAssignedBadges:'.unAssignedBadges-container'
        }

        , initialize: function(options) {
            this.taskModel = new Task({id:options.taskId});
            this.listenTo(this.taskModel,'assignBadgeToTaskEvent',this.render);
        }
        , onRender: function() {
            var self = this;
            this.taskModel.fetch().then(function(){
                self.taskDetails.show(new TaskDetails({model: self.taskModel}));
                self.badges.show(new Badges({model: self.taskModel}));
                self.unAssignedBadges.show(new AssignBadge({model: self.taskModel}));

            });




        }
    });
});