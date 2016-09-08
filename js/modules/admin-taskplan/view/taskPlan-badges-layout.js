define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskplanBadgesCollectionView = require('./taskplan-badges-collection-view');
    var TaskPlans = require('../model/taskplans');
    var TaskPlan=require('../model/taskplan');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-taskplan-taskplan-badges-layout'
        , regions: {
            badges:'.badges-container'

        }

        , initialize: function(options) {
            this.masterModel = options.model;

        }
        , onRender: function() {
            var taskPlanBadgesCollection = new TaskPlans(this.masterModel.get('badges'));
            taskPlanBadgesCollection.taskplanId=new TaskPlan({taskplanId:this.options.model.id});
            this.badges.show(new TaskplanBadgesCollectionView({collection:taskPlanBadgesCollection}));
        },




    });
});