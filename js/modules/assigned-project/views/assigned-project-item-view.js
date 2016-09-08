define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName:'li'
        , className:'card-2'
        , template: '#assigned-project-assigned-project-item-view'
        , events: {
            'click':'goToProject'
        }
        , initialize: function() {
            _.bindAll(this, 'getAvailableBadges', 'getAwardedBadges', 'getAvailablePoints', 'getAwardedPoints', 'getAvailableTasks', 'getAwardedTasks');
            this.templateHelpers = this.templateHelpers || {};

            this.templateHelpers.getAvailableBadges = this.getAvailableBadges;
            this.templateHelpers.getAwardedBadges = this.getAwardedBadges;
            this.templateHelpers.getAvailablePoints = this.getAvailablePoints;
            this.templateHelpers.getAwardedPoints = this.getAwardedPoints;
            this.templateHelpers.getAvailableTasks = this.getAvailableTasks;
            this.templateHelpers.getAwardedTasks = this.getAwardedTasks;
        }
        , goToProject: function(){
            Backbone.history.navigate("#projects/"+this.model.get('id'), true);
        }
        , onRender: function(){
            if (this.model.isCompleted()){
                this.$el.addClass('completed');
            }
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


        , _getAllBadges: function(project) {
            var badges = [];
            var taskPlans = project.get('taskPlans');
            _.each(taskPlans, function(taskPlan){
                badges = badges.concat(taskPlan.badges);
                _.each(taskPlan.tasks, function(task){
                    badges = badges.concat(task.badges);
                });
            });
            return badges;
        }

        , _getAllTasks: function(project) {
            var tasks = [];
            var taskPlans = project.get('taskPlans');
            _.each(taskPlans, function(taskPlan){
                tasks = tasks.concat(taskPlan.tasks);
            });
            return tasks;
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