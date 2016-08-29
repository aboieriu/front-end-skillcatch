define(function(require, exports, module) {
    var Backbone = require('backbone');
    var TaskPlan = require('./task-plan');
    module.exports = Backbone.Collection.extend({
        model: TaskPlan
        , url : function(){
            return window.baseApiPath +'/api/loggedUser/own-tasks-plans';
        }
        , comparator: function(model) {
            return this._getAvailableTasks(model).length === 0;
        }
        , _getAvailableTasks: function(model){
            var allTasks = this._getAllTasks(model);
            var totalAvailableTasks = [];
            _.each(allTasks, function(task){
                if (task.status != 'DONE'){
                    totalAvailableTasks.push(task);
                }
            });
            return totalAvailableTasks;
        }
        , _getAllTasks: function(model) {
            var tasks = [];
            var taskPlan = model.attributes;
            tasks = tasks.concat(taskPlan.tasks);
            return tasks;
        }
    });
});
