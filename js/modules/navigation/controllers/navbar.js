define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var NavbarView = require('../views/navbar');

    module.exports = Marionette.Controller.extend({
        initialize: function () {
            this.navbarView = new NavbarView();
        }
    });
});