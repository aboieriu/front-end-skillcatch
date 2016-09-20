define(function(require, exports, module) {
    var Marionette = require('marionette');
    var UserTaskPlansItemView = require('./user-taskPlans-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: UserTaskPlansItemView
        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});