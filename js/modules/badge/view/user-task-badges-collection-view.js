define(function(require, exports, module) {
    var Marionette = require('marionette');
    var UserBadgeItemView = require('./user-task-badges-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: UserBadgeItemView
    });
});