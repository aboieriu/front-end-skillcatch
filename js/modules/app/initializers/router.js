define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ShowProjects = require('modules/showProjects/router');
    var LoginRouter = require('modules/login/router');
    var ShowBadges = require('modules/showBadges/router');
    var ShowAssignedTasks= require('modules/assigned-tasks/router');


    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ShowProjects();
                new LoginRouter();
                new ShowBadges();
                new ShowAssignedTasks();
            });
        }
    });

    module.exports = new RouterInitializer();
});
