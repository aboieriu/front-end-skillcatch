define(function(require, exports, module) {
    var app = require('app');
    var AppLayout = require('modules/app/views/layout');
    var NavbarController = require('modules/navigation/controllers/navbar');
    var BannerView = require('modules/banner/views/banner');

    var ShowLayoutInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.addInitializer(function() {
                this.navbar = new NavbarController();
                this.appLayout = new AppLayout();
                this.appLayout.sidebar.show( this.navbar.navbarView );
                this.appLayout.banner.show(new BannerView());
                this.showLayout = function( view ) {
                    this.appLayout.container.show( view );
                };
                this.closeLayout = function() {
                    this.appLayout.container.close();
                };
            });
        }
    });

    module.exports = new ShowLayoutInitializer();
    $('.sidebar-toggle').on('click', function () {
        $('.header').toggleClass('sidebar');
        $('.main-sidebar.col-md-2').toggleClass('span0');
    });
});