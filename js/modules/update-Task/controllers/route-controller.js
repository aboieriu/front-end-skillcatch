/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UpdateTaskPlan = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUpdateTask: function (groupId,taskPlanId, taskId) {

            app.showLayout(new UpdateTaskPlan({taskPlanId:taskPlanId, groupId:groupId, taskId:taskId}));
        }
    });

    module.exports = new MapRouteController();
});