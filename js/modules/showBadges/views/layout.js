define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.Layout.extend({
        id: 'showBadges',
        template: '#showBadges-layout',

        regions: {
            showBadges: "#show-badges"
        }
    });
});
