define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AssignedProjects = require('../../assigned-project/model/assigned-projects');
    var ProjectCollectionView = require('./projects-collection-view');
    module.exports = Marionette.Layout.extend({
        groupId: 'showTaskplans',
        template: '#show-projects-layout',

        regions: {
            projects: ".projects-container"
        }

        , initialize: function() {
            this.collection = new AssignedProjects();
            this.collection.fetch();
        }
        , onRender: function() {
            this.projects.show(new ProjectCollectionView({collection:this.collection}));
        }
    });
});
