
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            'updateInfo':'updateInfo',
            'updateInfo/:id': 'updateInfo'
        }
    });
});