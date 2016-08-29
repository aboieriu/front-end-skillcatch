
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Task = require('../model/task');
    var TaskDetails = require('./task-details');
    var Badges = require('../../admin-badge/view/layout');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-task-task-layout'
        , ui: {
            taskDetails:'.task-details-container'
            ,badges:'.badges-container'

        }

        , initialize: function(options) {
            this.taskModel = new Task({id:options.taskId});
        }
        , onRender: function() {
            var self = this;
            this.taskModel.fetch().then(function(){
                self.ui.taskDetails.html(new TaskDetails({model: self.taskModel}).render().$el);
                self.ui.badges.html(new Badges({model: self.taskModel}).render().$el);
            });
        }
    });
});