define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _ = require('underscore');
    var eventBus = Backbone.Events;


    module.exports = Marionette.ItemView.extend({
        template: '#footer-footer',
       // className: 'banner col-md-12',
        initialize: function() {

        },
        onRender: function () {
        }
    });
});