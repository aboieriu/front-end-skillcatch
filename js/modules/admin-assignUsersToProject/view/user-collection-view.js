define(function(require, exports, module) {
    var Marionette = require('marionette');
    var UserItemView = require('./user-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: UserItemView

        , render: function(){
           this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        },

    });
});

