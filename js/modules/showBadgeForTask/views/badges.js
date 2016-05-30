/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Badge = require('./badge');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul',
        className:'show-list-badge',
        itemView: Badge
    });

});