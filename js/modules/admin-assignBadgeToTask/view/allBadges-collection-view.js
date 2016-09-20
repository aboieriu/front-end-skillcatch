define(function(require, exports, module) {
    var Marionette = require('marionette');
    var BadgeItemView = require('./allBadges-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: BadgeItemView
        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        },

    });
});

