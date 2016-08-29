define(function(require, exports, module) {
    var Marionette = require('marionette');
    var UserBadgesCollectionView = require('./user-badges-collection-view');
    var UserBadgeCollection = require('../model/UserBadgesCollection');
    module.exports = Marionette.Layout.extend({
        className: 'user-badges-layout',
        template: '#badge-user-badges-layout'
        , regions: {
            userBadges:'.badges-container'
        }
        , initialize: function(options) {
            if(options && options.model) {
                this.model = options.model;
                this.listenTo(this.model, 'sync', this.render);
            }
        }
        , onRender: function(){
            var badgesCollection = new UserBadgeCollection(this.model.get('badges'));
            badgesCollection.sort();
            this.userBadges.show(new UserBadgesCollectionView({collection:badgesCollection}));
        }
    });
});