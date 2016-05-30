/**
 * Created by amusat on 4/29/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var tasks = require('./taskPlan');


    module.exports = Backbone.Collection.extend({
        model :tasks,
        url :function() {
            return   window.baseApiPath + '/api/projectGroup/' + this.id + '/taskPlan/';
        }
    });
});

