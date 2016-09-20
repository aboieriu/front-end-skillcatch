/**
 * Created by amusat on 5/31/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
         isCompleted: function(){
            var completed = true;
            _.each(this.get('tasks'), function(task){
                if (task.status != "DONE"){
                    completed = false;
                }
            });
            return completed;
        }
    });
});
