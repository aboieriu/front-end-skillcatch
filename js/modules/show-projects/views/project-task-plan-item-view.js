define(function(require, exports, module) {
    var Marionette = require('marionette');
    var BadgeCollectionView = require('../../badge/view/user-badges-collection-view');
    var BadgeCollection = require('../../badge/model/UserBadgesCollection');
    module.exports = Marionette.ItemView.extend({
        template: '#show-projects-project-task-plans'
        , ui: {
            badgesContainer: '.badges-container'
        }
        , onRender: function() {
            var badgesCollection = new BadgeCollection(this.model.get('badges'));
            badgesCollection.sort();
            this.ui.badgesContainer.html(new BadgeCollectionView({collection:badgesCollection}).render().$el);
        }
    });
});