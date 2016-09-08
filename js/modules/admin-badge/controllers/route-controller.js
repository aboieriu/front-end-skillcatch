define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var BadgesLayout = require('../view/layout');


    var MapRouteController = Marionette.Controller.extend({
        showBadges: function () {
            app.showLayout(new BadgesLayout());
        }

    });

    module.exports = new MapRouteController();
});