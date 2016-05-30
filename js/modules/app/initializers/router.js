define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ShowProject = require('modules/showProject/router');
    var ShowProjects = require('modules/showProjects/router');
    var LoginRouter = require('modules/login/router');
    var showTaskPlan = require('modules/showTaskPlan/router');
    var CreateProject = require('modules/createProject/router');
    var UpdateProject = require('modules/update-project/router');
    var CreateTaskPlan = require('modules/create-taskPlan/router');
    var UpdateTaskPlan = require('modules/update-taskPlan/router');
    var UpdateTask = require('modules/update-Task/router');
    var CreateTask = require('modules/createTask/router');
    var CreateBadge = require('modules/createbadge/router');
    var ShowTasks = require('modules/showTasks/router');
    var ShowBadges = require('modules/showBadges/router');
    var ShowTaskItem = require('modules/showTask/router');
    var ShowBadgeForTask = require('modules/showBadgeForTask/router');
    var ShowUser = require('modules/showUser/router');
    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ShowProject();
                new ShowProjects();
                new LoginRouter();
                new showTaskPlan();
                new CreateProject();
                new UpdateProject();
                new CreateTaskPlan();
                new UpdateTaskPlan();
                new CreateTask();
                new ShowTasks();
                new ShowBadges();
                new ShowTaskItem();
                new ShowBadgeForTask();
                new UpdateTask();
                new CreateBadge();
                new ShowUser();
            });


        }
    });

    module.exports = new RouterInitializer();
});
