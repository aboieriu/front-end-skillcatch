define(function(require, exports, module) {
    var $ = require('jquery');
    var Marionette = require('marionette');
    var app = require('app');
    var _ = require('underscore');
    var LoginFormView = require('./login-form');

    var eventBus = Backbone.Events;

    module.exports = Marionette.Layout.extend({
        template: '#login-layout',
         regions: {
            login: '#main-login-container'
        }
        , onRender: function() {
            this.login.show(new LoginFormView());
        }
    });
});

