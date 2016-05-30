/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ProjectTaskPlan = require('./project-taskPlan');
    var NoItems = require('./no-items');
    var TaskPlans = require('../models/taskPlans');
    module.exports = Marionette.CollectionView.extend({
        tagName:'ul',
        className:'show-list-taskPlans',
        itemView: ProjectTaskPlan,
        emptyView: NoItems
        , itemViewOptions: function(options) {
            return {
                groupId: this.options.groupId,
            };
        }
    });

});