/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var Taskplan = require('../view/layout');
    var TaskplanLayout = require('../view/taskplan-layout');

    var MapRouteController = Marionette.Controller.extend({
        showTaskplans: function () {
            app.showLayout(new Taskplan());
        }
        , showTaskplan: function (id) {
            app.showLayout(new TaskplanLayout({taskplanId:id}));
        }
    });

    module.exports = new MapRouteController();
});