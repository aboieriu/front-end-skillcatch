define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Backbone = require('backbone');
    var UserBadgesCollectionView = require('./user-badges-collection-view');
    var UserTaskBadgesCollectionView = require('./user-task-badges-collection-view');
    var UserTaskPlansCollection = require('../model/UserTaskPlansCollection');


    module.exports = Marionette.Layout.extend({
        className: 'user-badges-layout',
        template: '#badge-user-badges-layout'
        , regions: {
            userTaskPlanBadges:'.badges-container'
            ,userTaskBadges:'.tasks-badges-container'
        }
        , initialize: function(options) {
            if(options && options.model) {
                this.model = options.model;
                this.listenTo(this.model, 'sync', this.render);
            }
        }
        , onRender: function(){
            var self=this;
            var taskPlansCollection = new UserTaskPlansCollection(this.model.get('taskPlans'));
            var taskPlanBadgesCollection=new Backbone.Collection();
            var tasksBadgesCollection=new Backbone.Collection();
            taskPlansCollection.each(function (taskPlanModel) {
                var taskPlan=taskPlanModel.toJSON();
                var badgesCollection =new UserTaskPlansCollection(taskPlan.badges,{unique:false});
                badgesCollection.each(function (badgeModel) {
                    badgeModel.id=_.uniqueId(this.cid);
                    taskPlanBadgesCollection.add(badgeModel,{merge:false});
                    self.userTaskPlanBadges.show(new UserBadgesCollectionView({collection:taskPlanBadgesCollection}));
                });
                var tasksCollection=new UserTaskPlansCollection(taskPlan.tasks,{unique:false});
                tasksCollection.each(function (taskModel) {
                    var task=taskModel.toJSON();
                    var taskBadgeCollection=new UserTaskPlansCollection(task.badges,{unique:false});
                    taskBadgeCollection.each(function (taskBadgeModel) {
                        taskBadgeModel.id=_.uniqueId(this.cid);
                        tasksBadgesCollection.add(taskBadgeModel,{merge:false});
                        self.userTaskBadges.show(new UserTaskBadgesCollectionView({collection:tasksBadgesCollection}));

                    })

                })

            });

        }
    });
});