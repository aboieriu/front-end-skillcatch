define(function(require, exports, module) {
    var Backbone = require('backbone');
    var BadgeModel = require('./badge');


    module.exports = Backbone.Model.extend({
        model:BadgeModel,
        url :function() {
            return window.baseApiPath + '/api/projectGroup/' +  this.get('groupId')+ '/taskPlan/' +  this.get('taskPlanId') + '/task/' + this.get('taskId') + '/badge';
        }
    });
});

