define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/badges/taskPlanUnAssignedBadges/'+this.taskPlanId.get('taskPlanId');
            }
            return window.baseApiPath +'/api/taskplans/'+this.get('collection').taskPlanId.get('taskPlanId')+'/assignBadge/'+ this.get('id');
        }
    });
});