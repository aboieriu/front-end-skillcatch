define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var LoginFormView = require('./login-form');


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

