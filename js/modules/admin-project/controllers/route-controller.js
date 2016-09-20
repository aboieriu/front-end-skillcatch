/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var ProjectsLayout = require('../view/layout');
    var ProjectLayout = require('../view/project-layout');
    var AssignedUserLayout=require('../view/assignedUser-layout');

    var MapRouteController = Marionette.Controller.extend({
        showProjects: function () {
            app.showLayout(new ProjectsLayout());
        }
        , showProject: function (id) {
            app.showLayout(new ProjectLayout({projectId:id}));
        },
        showAssignedUser:function (id, projectId) {
            app.showLayout(new AssignedUserLayout({userId:id,userProjectId:projectId}))
        }
    });

    module.exports = new MapRouteController();
});