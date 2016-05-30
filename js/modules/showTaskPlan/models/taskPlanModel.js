/**
 * Created by amusat on 5/4/2016.
 */
/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({
        url :function() {
            return window.baseApiPath + '/api/projectGroup/' +  this.get('groupId')+ '/taskPlan/' +  this.get('taskPlanId');
        }
    });
});
