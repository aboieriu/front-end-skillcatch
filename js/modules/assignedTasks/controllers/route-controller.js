define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var tasksLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showAssignedTasks: function (userId) {
            app.showLayout(new tasksLayout({userId:userId}));

        }
    });

    module.exports = new MapRouteController();
});