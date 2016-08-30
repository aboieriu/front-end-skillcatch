define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskplanBadgesItemView = require('./taskplan-badges-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: TaskplanBadgesItemView

        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});