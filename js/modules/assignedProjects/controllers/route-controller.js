define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var HomeLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showAssignedProjects: function (groupId) {
            app.showLayout(new HomeLayout({groupId:groupId}));

        }
    });

    module.exports = new MapRouteController();
});