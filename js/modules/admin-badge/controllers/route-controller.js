define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var BadgesLayout = require('../view/layout');
    var BadgeLayout=require('../view/badge-layout');


    var MapRouteController = Marionette.Controller.extend({
        showBadges: function () {
            app.showLayout(new BadgesLayout());
        },
        showBadge:function (id) {
            app.showLayout(new BadgeLayout({badgeId:id}))
        }

    });

    module.exports = new MapRouteController();
});