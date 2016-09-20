/**
 * Created by amusat on 5/31/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                throw new Error('Missing model id property');
            }
            return window.baseApiPath +'/api/loggedUser/assigned-projects/'+ this.get('id');
        }

        , isCompleted: function(){
            var completed = true;
            _.each(this.get('taskPlans'), function(taskPlan){
                _.each(taskPlan.tasks, function(task){
                    if (task.status != "DONE"){
                        completed = false;
                    }
                });
            });
            return completed;
        }
    });
});
