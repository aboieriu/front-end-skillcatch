define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Badges = require('../model/badges');
    var BadgeCollectionView = require('./badge-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-badge-layout'
        , ui: {
            badges:'.badges-container'
            , name: '.form-name'
            , description: '.form-description'
            , image:'.form-image'
            , points:'.form-points'
        }
        , events: {
            'click .addBadge':'addBadge'

        }

        , initialize: function(options) {
            this.masterModel = options.model;
            this.listenTo(this.masterModel, 'sync', this.render);

        }
        , onRender: function() {
            var BadgeCollection = new Badges(this.masterModel.get('badges'));
            this.ui.badges.append(new BadgeCollectionView({collection:BadgeCollection}).render().$el);
        }
        , addBadge: function() {
            var self = this;
            var badgeData = {
                name: this.ui.name.val()
                , description: this.ui.description.val()
                , image: this.ui.image.val()
                , points:this.ui.points.val()

            };

            this.masterModel.get('badges').push(badgeData);
            this.masterModel.save().always(function(){
                self.masterModel.fetch();
            })

        }
    });
});
