/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewLogin = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        login: function (id) {
            app.appLayout.$el.addClass("login-page");
            app.showLayout(new NewLogin());
        }
    });

    module.exports = new MapRouteController();
});