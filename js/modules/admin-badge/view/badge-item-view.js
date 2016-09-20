define(function(require, exports, module) {

    var Backbone=require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-badge-badge-item-view'
        , className: 'clickable'
        , events: {
            'click .removeBadge':'removeBadge'
            ,'click ':'goToBadge'

        },
        goToBadge:function () {
            Backbone.history.navigate("#admin-badges/"+this.model.get('id'), true);
        }

        , removeBadge: function(ev) {
            ev.stopPropagation();
            this.model.destroy();
        }
    });
});