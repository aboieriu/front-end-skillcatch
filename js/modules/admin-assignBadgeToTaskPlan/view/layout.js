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
            this.badgesCollection = new Badges();
            this.badgesCollection.taskPlanId=new Taskplan({taskPlanId:this.options.model.id});
            this.badgesCollection.fetch();
        }
        , onRender: function() {
            this.ui.assignBadge.append(new BadgeCollectionView({collection:this.badgesCollection}).render().$el);
        }

    });
});