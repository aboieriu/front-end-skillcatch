/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var CreateNewTaskPlan = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showNewTaskPlan: function (id) {
            app.showLayout(new CreateNewTaskPlan({id:id}));
        }
    });

    module.exports = new MapRouteController();
});