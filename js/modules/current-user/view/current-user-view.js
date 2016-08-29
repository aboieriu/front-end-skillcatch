define(function(require, exports, module) {
    var Marionette = require('marionette');


    module.exports = Marionette.ItemView.extend({
        template: '#current-user-main-view'
        , initialize: function() {
            this.listenTo(this.model, 'sync', this.render);
        }
    });
});