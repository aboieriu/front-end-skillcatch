define(function(require, exports, module) {
    var app = require('app');
    var Marionette = require('marionette');
    var AssignedProject = require('../../assigned-project/model/project-model');
    var ProjectItemView = require('./project-item-view');
    module.exports = Marionette.Layout.extend({
        groupId: 'showProjects',
        template: '#show-projects-project-layout',
        regions: {
            project: ".project-main-container"
        }
        , initialize: function(options) {
            this.model = new AssignedProject();
            this.listenTo(this.model, 'sync', this.render);
            this.listenTo(this.model, 'task-updated', function(){
                this.model.fetch();
                app.master.fetch();
            });
            this.model.set('id', options.projectId);
            this.model.fetch();
        }
        , onRender: function() {
            this.project.show(new ProjectItemView({model:this.model}));
        }
    });
});
