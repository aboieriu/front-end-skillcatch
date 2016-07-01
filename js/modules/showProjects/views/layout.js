define(function(require, exports, module) {
    var Marionette = require('marionette');
    module.exports = Marionette.Layout.extend({
        groupId: 'showProjects',
        template: '#showProjects-layout',

        regions: {
            showProjects: "#show-projectDetails"
        }
    });
});
