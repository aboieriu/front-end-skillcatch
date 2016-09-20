define(function(require, exports, module) {
    var Backbone = require('backbone');
    var TaskPlansModel =require('./projectUnAssignedTaskPlan');

    module.exports = Backbone.Collection.extend({
        model:TaskPlansModel
        , url : function(){
            return window.baseApiPath +'/api/taskplans/'+this.userId.get('userId')+'/getProjectUnAssignedTaskPlans';
        }
        , comparator: function(model) {
            return -model.get('id');
        }
    });
});