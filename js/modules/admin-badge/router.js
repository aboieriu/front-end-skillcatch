define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            'admin-badges': 'showBadges'
            ,'admin-badges/:id':'showBadge'

        }
    });
});