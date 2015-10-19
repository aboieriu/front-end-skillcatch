define(function(require, exports, module) {
    var app = require('app');
    var AppLayout = require('modules/app/views/layout');
    var NavbarController = require('modules/navigation/controllers/navbar');

    var ShowLayoutInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.addInitializer(function() {
                this.navbar = new NavbarController();
                this.appLayout = new AppLayout();
                this.appLayout.sidebar.show( this.navbar.navbarView );
                this.showLayout = function( view ) {
                    this.appLayout.container.show( view );
                }
                this.closeLayout = function() {
                    this.appLayout.container.close();
                }
            });
        }
    });

    module.exports = new ShowLayoutInitializer();
});