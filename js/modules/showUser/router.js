/**
 * Created by amusat on 5/30/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            'show-project/:groupId/user/:userId': 'showUser'
        }
    });
});