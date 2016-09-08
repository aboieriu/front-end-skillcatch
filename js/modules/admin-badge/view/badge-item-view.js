define(function(require, exports, module) {

    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-badge-badge-item-view'
        , className: 'clickable'
        , events: {
            'click .removeBadge':'removeBadge'

        }

        , removeBadge: function(ev) {
            ev.stopPropagation();
            this.model.destroy();
        }
    });
});