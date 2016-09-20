define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskplanTaskItemVIew = require('./taskplan-task-item-view');
    module.exports = Marionette.CollectionView.extend({
        itemView:TaskplanTaskItemVIew
    });
});