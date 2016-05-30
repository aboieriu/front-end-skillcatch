define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'project-taskPlan-item',
        template: '#home-user-item'
    });
});