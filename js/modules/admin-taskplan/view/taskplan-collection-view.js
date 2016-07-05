define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskplanItemView = require('./taskplan-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: TaskplanItemView
        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});