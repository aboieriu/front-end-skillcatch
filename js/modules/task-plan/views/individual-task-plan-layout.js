define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.Layout.extend({
        className: 'individual-task-plan-layout',
        template: '#task-plan-individual-task-plan-layout'
        , regions: {
            projects:'.assigned-projects-container'
        }
        , initialize: function(options) {

        }
    });
});