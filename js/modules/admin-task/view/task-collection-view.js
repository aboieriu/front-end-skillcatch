define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskItemView = require('./task-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: TaskItemView

        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});
