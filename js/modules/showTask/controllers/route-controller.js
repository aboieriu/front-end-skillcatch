/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewShowTaskPlan = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        showTask: function (groupId, taskPlanId,taskId) {

            app.showLayout(new NewShowTaskPlan({groupId:groupId, taskPlanId:taskPlanId,taskId:taskId}));
        },
        ShowBadge: function (groupId, taskPlanId,taskId) {

            app.showLayout(new NewShowTaskPlan({groupId:groupId, taskPlanId:taskPlanId,taskId:taskId}));
        }
    });

    module.exports = new MapRouteController();
});