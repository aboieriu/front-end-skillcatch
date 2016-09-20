define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UsersLayout = require('../view/layout');
    var UserLayout=require('../view/user-layout');


    var MapRouteController = Marionette.Controller.extend({
        showUsers: function () {
            app.showLayout(new UsersLayout());
        },
        showUser:function (id) {
            app.showLayout(new UserLayout({userId:id}))
        }

    });

    module.exports = new MapRouteController();
});
