define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var HomeLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showHome: function (userId) {
            app.showLayout(new HomeLayout({userId:userId}));

        }
    });

    module.exports = new MapRouteController();
});