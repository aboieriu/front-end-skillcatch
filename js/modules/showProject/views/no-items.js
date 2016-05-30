/**
 * Created by amusat on 5/5/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#showProject-no-items'

        , initialize: function(options) {
            this.groupId = options.groupId;
            this.model.set('groupId', options.groupId);
        }

    });
});
