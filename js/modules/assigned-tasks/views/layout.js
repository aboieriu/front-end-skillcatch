define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    module.exports = Marionette.Layout.extend({
        template: '#assigned-tasks-layout',
        regions: {
            showTaskDetails: '#assignedTaskItems'
        }
    });

});