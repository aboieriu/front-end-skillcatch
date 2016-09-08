define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskplanBadgesItemView = require('./taskplan-badges-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: TaskplanBadgesItemView
        ,initialize:function () {
            this.listenTo(this.collection,'add',this.render);
        }

        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});