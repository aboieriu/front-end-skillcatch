define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AssignedUserTaskPlanItemView = require('./assignedUser-taskPlan-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: AssignedUserTaskPlanItemView
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});