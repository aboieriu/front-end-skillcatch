/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewShowProject = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        showProject: function (id, taskPlanId) {

            app.showLayout(new NewShowProject({id:id, taskPlanId:taskPlanId}));
        }
    });

    module.exports = new MapRouteController();
});