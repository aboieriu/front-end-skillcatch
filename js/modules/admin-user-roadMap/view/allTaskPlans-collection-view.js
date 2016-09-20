define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AllTaskPlanItemView = require('./allTaskPlans-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: AllTaskPlanItemView
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
        , render: function(){
            this.collection.sort();
            Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});