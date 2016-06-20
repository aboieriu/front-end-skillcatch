define(function(require, exports, module) {
    var Marionette = require('marionette');
    var CurrentUserView = require('modules/current-user/view/current-user-view');
    var CurrentUserModel = require('modules/current-user/model/current-user');

    module.exports = Marionette.Layout.extend({
        template: '#navigation-navbar',
        regions: {
            currentUserDetails:'#user-details-region'
        }

        , initialize: function() {
            this.currentUserModel = new CurrentUserModel();
        }
        , onRender: function() {
            this.currentUserDetails.show(new CurrentUserView({model:this.currentUserModel}));
            this.currentUserModel.fetch();
        }
    });

});

