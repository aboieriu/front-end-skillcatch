/**
 * Created by amusat on 5/5/2016.
 */
/**
 * Created by amusat on 4/29/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var tasks = require('./badge');


    module.exports = Backbone.Model.extend({
        url :function() {
            return window.baseApiPath + '/api/projectGroup/' +  this.get('groupId')+ '/taskPlan/' +  this.get('taskPlanId') + '/task/'+ this.get('taskId') + '/badge';
        }
    });
});

