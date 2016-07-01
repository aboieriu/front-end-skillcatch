define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AssignedProjectItemView = require('../../assigned-project/views/assigned-project-item-view');
    module.exports = AssignedProjectItemView.extend({
        template: '#show-projects-project-item-view'
    });
});