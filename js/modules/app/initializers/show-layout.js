define(function(require, exports, module) {
    var app = require('app');
    var AppLayout = require('modules/app/views/layout');
    var NavbarController = require('modules/navigation/controllers/navbar');
    var BannerView = require('modules/banner/views/banner');
    var FooterView = require('modules/footer/views/footer');
    var CurrentUserModel = require('modules/current-user/model/current-user');

    var ShowLayoutInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.addInitializer(function() {
                var self = this;
                app.master = new CurrentUserModel();
                this.navbar = new NavbarController();
                this.appLayout = new AppLayout();
                this.appLayout.banner.show(new BannerView());
                this.appLayout.footer.show(new FooterView())
                this.showLayout = function( view ) {
                    this.appLayout.container.show( view );
                };
                this.closeLayout = function() {
                    this.appLayout.container.close();
                };

                this.listenTo(app.master, 'sync', function(){
                    if (app.master.get('admin')) {
                        self.appLayout.sidebar.show( self.navbar.navbarViewAdmin );
                    } else {
                        self.appLayout.sidebar.show( self.navbar.navbarView );
                    }
                });
                app.init = app.master.fetch();
            });
        }
    });

    module.exports = new ShowLayoutInitializer();
    $('.sidebar-toggle').on('click', function () {
        $('.header').toggleClass('sidebar');
        $('.main-sidebar.col-md-2').toggleClass('span0');
    });
});