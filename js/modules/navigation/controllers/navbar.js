define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var NavbarView = require('../views/navbar');
    var NavbarViewAdmin = require('../views/navbar-admin');

    module.exports = Marionette.Controller.extend({
        initialize: function () {
            this.navbarView = new NavbarView();
            this.navbarViewAdmin = new NavbarViewAdmin();
        }
    });
});