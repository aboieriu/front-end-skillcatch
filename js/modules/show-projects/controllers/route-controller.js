/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var ProjectsLayout = require('../views/layout');
    var ProjectLayout = require('../views/project-layout');

    var MapRouteController = Marionette.Controller.extend({
        showProjects: function () {
            app.showLayout(new ProjectsLayout());
        }
        , showProject: function (id) {
            app.showLayout(new ProjectLayout({projectId:id}));
        }
    });

    module.exports = new MapRouteController();
});