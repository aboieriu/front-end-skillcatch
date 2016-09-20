define(function(require, exports, module) {
    var Backbone = require('backbone');
    var BadgeModel =require('./badge');


    module.exports = Backbone.Collection.extend({
        model:BadgeModel
        , url : function(){
            return window.baseApiPath +'/api/badges/taskPlanUnAssignedBadges/'+this.taskPlanId.get('taskPlanId');
        }
        , comparator: function(model){
            return -model.get('id');
        }
    });
});
