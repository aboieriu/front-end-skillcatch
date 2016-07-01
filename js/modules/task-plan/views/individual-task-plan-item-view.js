define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName:'li'
        , className:'card-2'
        , template: '#task-plan-individual-task-plan-item-view'
        , initialize: function(){
            _.bindAll(this, 'getAvailableBadges', 'getAwardedBadges', 'getAvailablePoints', 'getAwardedPoints', 'getAvailableTasks');
            this.templateHelpers = this.templateHelpers || {};

            this.templateHelpers.getAvailableBadges = this.getAvailableBadges;
            this.templateHelpers.getAwardedBadges = this.getAwardedBadges;
            this.templateHelpers.getAvailablePoints = this.getAvailablePoints;
            this.templateHelpers.getAwardedPoints = this.getAwardedPoints;
            this.templateHelpers.getAvailableTasks = this.getAvailableTasks;
        }

        , onRender: function() {
            if (this.isTaskPlanComplete()){
                this.$el.addClass('completed');
            }
        }

        , isTaskPlanComplete: function() {
            var availableTasks = this.getAvailableTasks();
            return availableTasks === 0;
        }

        , getAvailableBadges: function() {
            return this._getAvailableBadges().length;
        }
        , getAwardedBadges: function() {
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

        , getAvailableTasks: function(){
            return this._getAvailableTasks().length;
        }


        , getAwardedPoints: function(){
            var totalAwardedPoints = 0;
            var awardedBadges = this._getAwardedBadges();
            _.each(awardedBadges, function(badge){
                totalAwardedPoints = totalAwardedPoints + badge.points;
            });
            return totalAwardedPoints;
        }


        , _getAllBadges: function(model) {
            var badges = [];
            var taskPlan = model.attributes;
            badges = badges.concat(taskPlan.badges);
            _.each(taskPlan.tasks, function(task){
                badges = badges.concat(task.badges);
            });
            return badges;
        }

        , _getAllTasks: function(model) {
            var tasks = [];
            var taskPlan = model.attributes;
            tasks = tasks.concat(taskPlan.tasks);
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
    });
});