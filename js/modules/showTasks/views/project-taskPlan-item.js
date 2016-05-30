/**
 * Created by amusat on 5/4/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'project-taskPlan-item',
        template: '#showTaskPlan-project-taskPlan-item',

    });
});