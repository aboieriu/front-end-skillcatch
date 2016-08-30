define(function(require, exports, module) {
    var Marionette = require('marionette');
    var ProjectItemView = require('./project-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'tbody'
        , itemView: ProjectItemView
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
        , render: function(){
            this.collection.sort();
            return Marionette.CollectionView.prototype.render.apply(this, arguments);
        }
    });
});