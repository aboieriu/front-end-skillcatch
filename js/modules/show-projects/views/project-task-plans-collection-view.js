define(function(require, exports, module) {
    var Marionette = require('marionette');
    var ProjectTaskPlanItemView = require('./project-task-plan-item-view');
    module.exports = Marionette.CollectionView.extend({
        itemView:ProjectTaskPlanItemView
    });
});