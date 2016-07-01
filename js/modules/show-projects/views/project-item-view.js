define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AssignedProjectItemView = require('../../assigned-project/views/assigned-project-item-view');
    var TaskPlansCollectionView = require('./project-task-plans-collection-view');
    module.exports = AssignedProjectItemView.extend({
        template: '#show-projects-project-item-view'
        , ui: {
            taskPlanContainer: '.project-taskplans'
        }
        , onRender:function() {
            var taskPlanCollection = new Backbone.Collection(this.model.get('taskPlans'));
            this.ui.taskPlanContainer.html(new TaskPlansCollectionView({collection:taskPlanCollection}).render().$el);
        }
    });
});