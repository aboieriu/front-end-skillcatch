define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskCollection = require('../../task/model/tasks');
    var TaskCollectionView = require('../../show-projects/views/taskplan-tasks-collection-view');
    var BadgeCollection = require('../../badge/model/UserTaskPlansCollection');
    var BadgeCollectionView = require('../../badge/view/user-badges-collection-view');
    module.exports = Marionette.ItemView.extend({
        template: '#assigned-tasks-task-item-view'
        , tagName:'li'
        , ui: {
            tasks: '.tasks-container'
            , badgesContainer: '.badges-container'
        }
        , initialize: function(){
            _.bindAll(this, 'getAvailableBadges', 'getAwardedBadges', 'getAvailablePoints', 'getAwardedPoints', 'getAvailableTasks', 'getAwardedTasks');
            this.templateHelpers = this.templateHelpers || {};

            this.templateHelpers.getAvailableBadges = this.getAvailableBadges;
            this.templateHelpers.getAwardedBadges = this.getAwardedBadges;
            this.templateHelpers.getAvailablePoints = this.getAvailablePoints;
            this.templateHelpers.getAwardedPoints = this.getAwardedPoints;
            this.templateHelpers.getAvailableTasks = this.getAvailableTasks;
            this.templateHelpers.getAwardedTasks = this.getAwardedTasks;
        }
        , onRender:function() {
            if (this.model.isCompleted()){
                this.$el.addClass('completed');
            }
            this.taskCollection = new TaskCollection(this.model.get('tasks'));
            this.badgesCollection = new BadgeCollection(this.model.get('badges'));
            this.listenTo(this.taskCollection, 'task-updated', function(){
                this.model.trigger('task-updated');
            });

            this.badgesCollection.sort();
            this.ui.tasks.html(new TaskCollectionView({collection:this.taskCollection}).render().$el);
            this.ui.badgesContainer.html(new BadgeCollectionView({collection:this.badgesCollection}).render().$el);
        }

        , getAvailableBadges: function(){
            return this._getAvailableBadges().length;
        }

        , getAwardedBadges: function(){
            return this._getAwardedBadges().length;
        }

        , getAvailablePoints: function(){
            var totalAvailablePoints = 0;
            var availableBadges = this._getAvailableBadges();
            _.each(availableBadges, function(badge){
                totalAvailablePoints = totalAvailablePoints + badge.points;
            });
            return totalAvailablePoints;
        }

        , getAwardedPoints: function(){
            var totalAwardedPoints = 0;
            var awardedBadges = this._getAwardedBadges();
            _.each(awardedBadges, function(badge){
                totalAwardedPoints = totalAwardedPoints + badge.points;
            });
            return totalAwardedPoints;
        }

        , getAvailableTasks: function(){
            return this._getAvailableTasks().length;
        }

        , getAwardedTasks: function(){
            return this._getAwardedTasks().length;
        }


        , _getAllBadges: function(taskPlan) {
            var badges = [];
            var tasks = taskPlan.get('tasks');
            badges = badges.concat(taskPlan.get('badges'));
            _.each(tasks, function(task){
                badges = badges.concat(task.badges);
            });
            return badges;
        }

        , _getAllTasks: function(taskPlan) {
            return taskPlan.get('tasks');
        }

        , _getAvailableBadges: function(){
            var badges = this._getAllBadges(this.model);
            var availableBadges = [];
            _.each(badges, function(badge){
                if (!badge.gained) {
                    availableBadges.push(badge);
                }
            });
            return availableBadges;
        }

        , _getAwardedBadges: function(){
            var badges = this._getAllBadges(this.model);
            var awardedBadges = [];
            _.each(badges, function(badge){
                if (badge.gained) {
                    awardedBadges.push(badge);
                }
            });
            return awardedBadges;
        }

        , _getAvailableTasks: function(){
            var allTasks = this._getAllTasks(this.model);
            var totalAvailableTasks = [];
            _.each(allTasks, function(task){
                if (task.status != 'DONE'){
                    totalAvailableTasks.push(task);
                }
            });
            return totalAvailableTasks;
        }

        , _getAwardedTasks: function(){
            var allTasks = this._getAllTasks(this.model);
            var totalAwardedTasks = [];
            _.each(allTasks, function(task){
                if (task.status === 'DONE'){
                    totalAwardedTasks.push(task);
                }
            });
            return totalAwardedTasks;
        }
    });
});