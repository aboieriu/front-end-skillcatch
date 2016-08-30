define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Project = require('../model/project');
    var Projects = require('../model/projects');
    var ProjectCollectionView = require('./project-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-layout'
        , ui: {
            projects:'.projects-container'
            , name: '.form-name'
            , description: '.form-description'
        }
        , events: {
            'click .addProject':'addProject'
        }
        , initialize: function(options) {
            this.projectsCollection = new Projects();
            this.projectsCollection.fetch();
        }
        , onRender: function() {
            this.ui.projects.append(new ProjectCollectionView({collection:this.projectsCollection}).render().$el);
        }
        , addProject: function(){
            var self = this;
            var projectData = {
                name: this.ui.name.val()
                , descriptions: this.ui.description.val()
            };

            var newProject = new Project(projectData);
            newProject.save().always(function(){
                self.projectsCollection.fetch();
            })
        }
    });
});