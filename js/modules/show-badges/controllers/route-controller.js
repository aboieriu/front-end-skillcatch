/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewShowBadges = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        showBadges: function (id) {

            app.showLayout(new NewShowBadges);
        }
    });

    module.exports = new MapRouteController();
});