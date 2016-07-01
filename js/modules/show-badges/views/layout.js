define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.Layout.extend({
        id: 'showBadges',
        template: '#show-badges-layout',

        regions: {
            showBadges: "#show-badges"
        }
    });
});
