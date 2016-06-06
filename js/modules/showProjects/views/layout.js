define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Projects = require('./project-list');
    var Project = require('../models/project');
    var deleteProjectModel = require('modules/showProject/models/projectModel');
    module.exports = Marionette.Layout.extend({
        groupId: 'showProjects',
        template: '#showProjects-layout',

        regions: {
            showProjects: "#show-projectDetails"
        },
        initialize: function (options) {
            this.model = new Project({});
            this.model.fetch();
        },

        onRender: function () {
            var self = this;
            var projectModel = new Project();
            projectModel.fetch().then(function(options) {
                self.showProjects.show(new Projects({
                    collection: new Backbone.Collection(options),
                    groupId: self.id
                }));

            });
        }
    });
});
