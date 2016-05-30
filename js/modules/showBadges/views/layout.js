define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var  Badges = require('./badge-list');
    var Badge = require('../models/badge');

    module.exports = Marionette.Layout.extend({
        id: 'showBadges',
        template: '#showBadges-layout',

        regions: {
            showBadges: "#show-badges"
        },

        initialize: function (options) {

            this.id = options.id
        },

        onRender: function () {
            var self = this;
            var badgeModel = new Badge();


            badgeModel.fetch().then(function(options) {
                self.showBadges.show(new Badges({
                    collection: new Backbone.Collection(options),
                    badgeId: self.id
                }));

            });


        }
    });
});
