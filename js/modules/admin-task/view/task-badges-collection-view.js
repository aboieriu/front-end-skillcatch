define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskBadgesItemView = require('./task-badges-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: TaskBadgesItemView

        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});

