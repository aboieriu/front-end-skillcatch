define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var Task = require('../view/layout');
    var TaskLayout = require('../view/task-layout');

    var MapRouteController = Marionette.Controller.extend({
        showTasks: function () {
            app.showLayout(new Task());
        }
        , showTask: function (id) {
            app.showLayout(new TaskLayout({taskId:id}));
        }
    });

    module.exports = new MapRouteController();
});
