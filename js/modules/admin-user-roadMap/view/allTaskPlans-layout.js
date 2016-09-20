define(function(require, exports, module) {
    var Marionette = require('marionette');
    var OwnTasks = require('../model/own-TaskPlans');
    var IndividualTaskPlansCollectionView = require('./allTaskPlans-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'individual-task-plan-layout',
        template: '#admin-user-roadMap-allTaskplans-layout'
        , regions: {
            taskPlans:'.all-task-plans-container'
        }
        , initialize: function(options) {
            this.collection = new OwnTasks();
            this.collection.id=options.id;
            this.collection.fetch();
        }
        , onRender: function() {
            this.taskPlans.show(new IndividualTaskPlansCollectionView({collection:this.collection}));
        }
    });
});