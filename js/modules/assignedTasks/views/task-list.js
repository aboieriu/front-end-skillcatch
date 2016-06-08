/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Project = require('./task-item');

    module.exports = Marionette.CollectionView.extend({
        itemView: Project,
        itemViewOptions: function(options) {
            return {
                groupId: this.options.groupId,
            };
        },
        initialize: function(){
            this.templateHelpers = this.templateHelpers || {};
        }
    });
});