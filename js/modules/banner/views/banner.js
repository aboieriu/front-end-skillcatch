define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#banner-banner',
        className: 'banner col-md-12',
        initialize: function() {
            this.render();
        }
    });
});