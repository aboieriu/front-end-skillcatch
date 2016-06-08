/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            // our default route
            'show-project/:groupId/show-taskPlan/:taskPlanId/update-task/:id': 'showUpdateTask'
        }
    });
});