define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UsersLayout = require('../view/layout');


    var MapRouteController = Marionette.Controller.extend({
        showUsers: function () {
            app.showLayout(new UsersLayout());
        }

    });

    module.exports = new MapRouteController();
});
