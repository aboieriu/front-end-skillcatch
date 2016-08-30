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
        , events: {
            'click .addBadge':'addBadge'

        }

        , initialize: function(options) {
            this.badgesCollection = new Badges();
            this.badgesCollection.taskId=new Task({taskId:this.options.model.id});
            this.badgesCollection.fetch();
        }
        , onRender: function() {
            this.ui.assignBadge.append(new BadgeCollectionView({collection:this.badgesCollection}).render().$el);
        }
        , addBadge: function() {
            var self = this;
            var badgeData = {
                name: this.ui.name.val()
                , points: this.ui.points.val()
                , description: this.ui.description.val()
                , image:this.ui.image.val()

            };
            var newBadge = new Badge(badgeData);
            newBadge.save().always(function(){
                self.clearFields();
                self.badgesCollection.fetch();


            })
        },
        clearFields:function () {
            document.getElementById('badgeName').value='';
            document.getElementById('badgePoints').value='';
            document.getElementById('badgeDescription').value='';
            document.getElementById('badgeImage').value='';
        }


    });
});