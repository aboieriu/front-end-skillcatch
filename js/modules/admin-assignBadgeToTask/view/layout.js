define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Badges = require('../model/badges');
    var Badge = require('../model/AddBadge');
    var BadgeCollectionView = require('./allBadges-collection-view');
    var Task=require('../../admin-task/model/task');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-assignBadgeToTask-layout'
        , ui: {
            assignBadge:'.assignBadge'
            , name: '.form-name'
            , points:'.form-points'
            , description: '.form-description'
            , image:'.form-image'
        }


        , initialize: function() {
            var self = this;
            this.badgesCollection = new Badges();
            this.badgesCollection.taskId=new Task({taskId:this.options.model.id});
            this.badgesCollection.fetch();
            this.listenTo(this.badgesCollection, 'assignBadgeToTaskEvent', function(){
                self.options.model.trigger('assignBadgeToTaskEvent');
            });

        }
        , onRender: function() {
            this.ui.assignBadge.append(new BadgeCollectionView({collection:this.badgesCollection}).render().$el);
        }



    });
});