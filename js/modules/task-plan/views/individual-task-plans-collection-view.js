define(function(require, exports, module) {
    var Marionette = require('marionette');
    var IndividualTaskPlanItemView = require('./individual-task-plan-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: IndividualTaskPlanItemView
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
    });
});