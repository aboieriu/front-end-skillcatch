define(function(require, exports, module) {
    var Marionette = require('marionette');
    var BadgeCollectionView = require('../../badge/view/user-badges-collection-view');
    var BadgeCollection = require('../../badge/model/UserBadgesCollection');
    var TaskCollection = require('../../task/model/tasks');
    var TaskplanTaskCollectionView = require('./taskplan-tasks-collection-view');
    module.exports = Marionette.ItemView.extend({
        template: '#show-projects-project-task-plans'
        , ui: {
            badgesContainer: '.badges-container'
            , tasksContainer: '.tasks-container'
        }
        , onRender: function() {
            this.badgesCollection = new BadgeCollection(this.model.get('badges'));
            this.tasksCollection = new TaskCollection(this.model.get('tasks'));
            this.listenTo(this.tasksCollection, 'task-updated', function() {
               this.model.trigger('task-updated');
            });
            this.badgesCollection.sort();
            this.ui.badgesContainer.html(new BadgeCollectionView({collection:this.badgesCollection}).render().$el);
            this.ui.tasksContainer.html(new TaskplanTaskCollectionView({collection:this.tasksCollection}).render().$el);
        }
    });
});