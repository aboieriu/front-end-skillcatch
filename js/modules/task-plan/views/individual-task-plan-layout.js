define(function(require, exports, module) {
    var Marionette = require('marionette');
    var OwnTasks = require('../model/own-task-plans');
    var IndividualTaskPlansCollectionView = require('./individual-task-plans-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'individual-task-plan-layout',
        template: '#task-plan-individual-task-plan-layout'
        , regions: {
            taskPlans:'.individual-task-plans-container'
        }
        , initialize: function(options) {
            this.collection = new OwnTasks();
            this.collection.fetch();
        }
        , onRender: function() {
            this.taskPlans.show(new IndividualTaskPlansCollectionView({collection:this.collection}));
        }
    });
});