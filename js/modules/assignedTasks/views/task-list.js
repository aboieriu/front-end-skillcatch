/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Task = require('./task-item');

    module.exports = Marionette.CollectionView.extend({
        itemView: Task,
        initialize: function(){
            this.templateHelpers = this.templateHelpers || {};
        },
        onRender: function(){
            debugger;
        }
    });
});