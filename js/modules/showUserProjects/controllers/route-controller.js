/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewShowProjects = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        showProjects: function (id) {

            app.showLayout(new NewShowProjects({id:id}));
        }
    });

    module.exports = new MapRouteController();
});