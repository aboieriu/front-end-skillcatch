define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskBadges = require('../model/tasks');
    var TaskBadgesCollectionView = require('./task-badges-collection-view');
    var Task=require('../model/task');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-task-task-badges-layout'
        , ui: {
            badges: '.badges-container'
        }
        , initialize: function(options) {
            this.masterModel = options.model;
            this.listenTo(this.masterModel, 'sync', this.render);

        }
        , onRender: function() {
            var TaskBadgesCollection = new TaskBadges(this.masterModel.get('badges'));
            TaskBadgesCollection.taskId=new Task({taskId:this.options.model.id});
            this.ui.badges.append(new TaskBadgesCollectionView({collection:TaskBadgesCollection}).render().$el);
        }

    });
});
