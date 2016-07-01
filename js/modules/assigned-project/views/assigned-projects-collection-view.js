define(function(require, exports, module) {
    var Marionette = require('marionette');
    var AssignedProjectItemView = require('./assigned-project-item-view');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: AssignedProjectItemView
        , initialize: function(){
            this.listenTo(this.collection, 'sync', this.render);
        }
    });
});