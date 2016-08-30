define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var HomeLayout = require('../views/layout');
    var HomeLayoutAdmin = require('../views/layout-admin');

    var MapRouteController = Marionette.Controller.extend({
        showHome: function (userId) {
            app.init.then(function(){
                if (app.master.get('admin')) {
                    app.showLayout(new HomeLayoutAdmin({userId:userId}));
                } else {
                    app.showLayout(new HomeLayout({userId:userId}));
                }
            });
        }
    });

    module.exports = new MapRouteController();
});