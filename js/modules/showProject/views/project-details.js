/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'project-details',
        template: '#showProject-project-details',

    });
});