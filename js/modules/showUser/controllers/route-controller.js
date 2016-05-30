/**
 * Created by amusat on 5/30/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var HomeLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUser: function (groupId,userId) {
            app.showLayout(new HomeLayout({groupId:groupId,userId:userId}));

        }
    });

    module.exports = new MapRouteController();
});