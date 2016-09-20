define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/badges/taskUnAssignedBadges/'+this.taskId.get('taskId');
            }
            return window.baseApiPath +'/api/tasks/'+this.get('collection').taskId.get('taskId')+'/assignBadge/'+ this.get('id');
        }
    });
});