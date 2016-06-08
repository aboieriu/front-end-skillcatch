/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UpdateTaskPlan = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUserUpdateTask: function (taskId) {

            app.showLayout(new UpdateTaskPlan({taskId:taskId}));
        }
    });

    module.exports = new MapRouteController();
});