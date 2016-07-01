define(function(require, exports, module) {
    var app = require('app');
    var Marionette = require('marionette');
    var CurrentUserView = require('modules/current-user/view/current-user-view');
    module.exports = Marionette.Layout.extend({
        template: '#navigation-navbar',
        regions: {
            currentUserDetails:'#user-details-region'
        }

        , initialize: function() {
            this.currentUserModel = app.master;
        }
        , onRender: function() {
            this.currentUserDetails.show(new CurrentUserView({model:this.currentUserModel}));
        }
    });
});

