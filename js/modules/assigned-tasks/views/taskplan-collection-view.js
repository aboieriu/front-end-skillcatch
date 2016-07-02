define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskPlanItemView = require('./taskplan-item-view');
    module.exports = Marionette.CollectionView.extend({
        itemView:TaskPlanItemView
        , tagName:'ul'
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
        , render: function(){
            this.collection.sort();
            Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});