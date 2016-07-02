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
            if (this.model.isCompleted()){
                this.$el.addClass('completed');
            }
            this.taskPlanCollection = new Backbone.Collection(this.model.get('taskPlans'));
            this.listenTo(this.taskPlanCollection, 'task-updated', function(){
                this.model.trigger('task-updated');
            });
            this.ui.taskPlanContainer.html(new TaskPlansCollectionView({collection:this.taskPlanCollection}).render().$el);
        }
    });
});