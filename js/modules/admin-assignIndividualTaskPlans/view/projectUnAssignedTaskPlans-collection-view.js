define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskPlansItemView = require('./projectUnAssignedTaskPlans-item-view');


    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: TaskPlansItemView

        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        },

    });
});

