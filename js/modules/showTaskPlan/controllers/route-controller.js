/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewShowTaskPlan = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        showTaskPlan: function (groupId, taskPlanId) {

            app.showLayout(new NewShowTaskPlan({groupId:groupId, taskPlanId:taskPlanId}));
        },
        showTask: function (groupId, taskPlanId) {

            app.showLayout(new NewShowTaskPlan({groupId:groupId, taskPlanId:taskPlanId}));
        }
    });

    module.exports = new MapRouteController();
});