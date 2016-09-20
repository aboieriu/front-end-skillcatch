define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ShowProjects = require('modules/show-projects/router');
    var LoginRouter = require('modules/login/router');
    var ShowBadges = require('modules/show-badges/router');
    var ShowAssignedTasks= require('modules/assigned-tasks/router');
    var AdminProjects= require('modules/admin-project/router');
    var AdminUsers=require('modules/admin-user/router');
    var AdminTaskplans=require('modules/admin-taskplan/router');
    var AdminTasks=require('modules/admin-task/router');
    var AdminBadges=require('modules/admin-badge/router');
    var UpdateUser=require('modules/updateUser/router');


    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ShowProjects();
                new LoginRouter();
                new ShowBadges();
                new ShowAssignedTasks();
                new AdminProjects();
                new AdminUsers();
                new AdminTaskplans();
                new AdminTasks();
                new AdminBadges();
                new UpdateUser();
            });
        }
    });

    module.exports = new RouterInitializer();
});
