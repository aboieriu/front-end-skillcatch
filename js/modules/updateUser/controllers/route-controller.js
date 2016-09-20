/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UpdateInfo = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        updateInfo: function (id) {

            app.showLayout(new UpdateInfo({id:id}));
        }
    });

    module.exports = new MapRouteController();
});