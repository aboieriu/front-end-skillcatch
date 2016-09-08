define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AssignedProjects = require('../../assigned-project/model/assigned-projects');
    var AssignedProjectCollectionView = require('./assigned-projects-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'assigned-projects-layout',
        template: '#assigned-project-assigned-projects-layout'
        , regions: {
            projects:'.assigned-projects-container'
        }
        , initialize: function(options) {
            this.collection = new AssignedProjects();
            this.collection.fetch();
        }
        , onRender: function() {
            this.projects.show(new AssignedProjectCollectionView({collection:this.collection}));
        }
    });
});