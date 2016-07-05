define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Project = require('../model/project');
    var ProjectDetails = require('./project-details');
    var Taskplans = require('../../admin-taskplan/view/layout');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-project-layout'
        , ui: {
            taskPlans:'.taskplans-container'
            , projectDetails:'.project-details-container'
        }

        , initialize: function(options) {
            this.projectModel = new Project({id:options.projectId});
        }
        , onRender: function() {
            var self = this;
            this.projectModel.fetch().then(function(){
                self.ui.projectDetails.html(new ProjectDetails({model: self.projectModel}).render().$el);
                self.ui.taskPlans.html(new Taskplans({model: self.projectModel}).render().$el);
            });
        }
    });
});