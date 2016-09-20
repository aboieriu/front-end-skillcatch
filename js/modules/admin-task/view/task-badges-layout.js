define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskBadges = require('../model/tasks');
    var TaskBadgesCollectionView = require('./task-badges-collection-view');
    var Task=require('../model/task');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-task-task-badges-layout'
        , ui: {
            assignBadges: '.assignBadges'
        }
        , initialize: function(options) {
            this.masterModel = options.model;
        }
        , onRender: function() {
            var TaskBadgesCollection = new TaskBadges(this.masterModel.get('badges'));
            TaskBadgesCollection.taskId=new Task({taskId:this.options.model.id});
            this.ui.assignBadges.append(new TaskBadgesCollectionView({collection:TaskBadgesCollection}).render().$el);
        }

    });
});
