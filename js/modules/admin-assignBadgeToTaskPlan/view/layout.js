define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Badges = require('../model/badges');
    var BadgeCollectionView = require('./allBadges-collection-view');
    var Taskplan=require('../../admin-taskplan/model/taskplan');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-assignBadgeToTaskPlan-layout'
        , ui: {
            assignBadge:'.assignBadge'

        }

        , initialize: function(options) {
            var self = this;
            this.allBadgesCollection = new Badges();
            this.allBadgesCollection.taskPlanId=new Taskplan({taskPlanId:this.options.model.id});
            this.allBadgesCollection.fetch();
            this.listenTo(this.allBadgesCollection, 'assignBadgeToTaskPlanEvent', function(){
                self.options.model.trigger('assignBadgeToTaskPlanEvent');
            });
        }
        , onRender: function() {
            this.ui.assignBadge.append(new BadgeCollectionView({collection:this.allBadgesCollection}).render().$el);
        }

    });
});