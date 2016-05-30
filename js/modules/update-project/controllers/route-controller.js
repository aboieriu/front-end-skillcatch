/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UpdateProject = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUpdateProject: function (id) {

            app.showLayout(new UpdateProject({id:id}));
        }
    });

    module.exports = new MapRouteController();
});