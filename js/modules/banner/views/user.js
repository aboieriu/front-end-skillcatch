/**
 * Created by amusat on 5/31/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'user-item',
        template: '#banner-userItem'
    });
});