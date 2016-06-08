define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var badgeLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUserBadge: function (userId) {
            app.showLayout(new badgeLayout({userId:userId}));

        }
    });

    module.exports = new MapRouteController();
});