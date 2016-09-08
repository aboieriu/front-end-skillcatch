define(function(require, exports, module) {
    var Marionette = require('marionette');
    var UserBadgeItemView = require('./user-badge-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: UserBadgeItemView
    });
});