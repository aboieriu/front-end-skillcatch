define(function(require, exports, module) {
    var Marionette = require('marionette');
    var ProjectItemView = require('./project-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: ProjectItemView
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
    });
});