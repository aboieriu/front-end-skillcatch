define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var _ = require('underscore');


    module.exports = Marionette.Layout.extend({
        el: $('body'),
        template: '#app-layout',
        ui : {
            '$appContainer':'#app-container'
        },
         regions: {
            sidebar: '#sidebar-wrapper',
            banner: '.main-header',
            container: '#page-content-wrapper',
            footer:'.main-footer'
        },
        initialize: function() {
            this.render();

        }
        , appToggleCompactMode: function() {
            this.ui.$appContainer.toggleClass('compact');
        }

    });

});


