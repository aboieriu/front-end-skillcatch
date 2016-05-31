define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _ = require('underscore');
    var eventBus = Backbone.Events;
    var UserDetailsModel =require('modules/home/models/userDetailsModel');
    var UserDetails = require('./user');

    module.exports = Marionette.Layout.extend({
        template: '#banner-banner',
       // className: 'banner col-md-12',
        regions: {
            showUserDetail:"#show-users"
        },
        initialize: function() {
            var userModel = new UserDetailsModel({
                userId:this.userId
            });
        },
        onRender: function () {
            var self = this;
            this.model = new UserDetailsModel();
            this.model.fetch().then(function(options) {
                self.showUserDetail.show(new UserDetails({
                    model: new Backbone.Model(options),
                }));
            });
        },
        logout: function(){
                var logout = window.sessionStorage.authToken;

        }

    });
});