define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Badge = require('../model/badge');
    var BadgeDetails = require('./badge-details');




    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-badge-badge-layout'
        , regions: {
             badgeDetails:'.badgeDetails-container'

        }

        , initialize: function(options) {
            this.badgeModel = new Badge({id:options.badgeId});
        }
        , onRender: function() {
            var self = this;
            this.badgeModel.fetch().then(function(){
                self.badgeDetails.show(new BadgeDetails({model: self.badgeModel}));


            });
        }
    });
});