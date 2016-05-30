define(function(require, exports, module) {
    var $ = require('jquery');
    var Marionette = require('marionette');
    var app = require('app');
    var _ = require('underscore');

    var eventBus = Backbone.Events;

    module.exports = Marionette.Layout.extend({
        el: $('body'),
        template: '#app-layout',
        ui : {
            '$appContainer':'#app-container'
        },
         regions: {
            sidebar: '#sidebar-wrapper',
            banner: '.main-header',
            container: '#page-content-wrapper'
        },
        initialize: function() {
            this.render();

        }
        , appToggleCompactMode: function() {
            this.ui.$appContainer.toggleClass('compact');
        }

    });

});


