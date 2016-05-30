define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _ = require('underscore');
    var eventBus = Backbone.Events;

    module.exports = Marionette.ItemView.extend({
        template: '#banner-banner',
       // className: 'banner col-md-12',
        ui : {
            '$toggleButton':'.sidebar-toggle'
        }

        , events: {
            'click @ui.$toggleButton': function() {
                eventBus.trigger('toggle-app-compact-mode')
            }
        }
        , initialize: function() {
            this.render();
        }
    });
});