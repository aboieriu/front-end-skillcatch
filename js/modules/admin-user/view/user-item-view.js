define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-user-user-item-view'
        , className: 'clickable'
        , events: {
            'click .removeUser':'removeUser'
            , 'click':'goToUser'
        }
        , goToUser: function(ev){
            ev.stopPropagation();
            Backbone.history.navigate("#admin-users/"+this.model.get('id'), true);
        }
        , removeUser: function() {
            this.model.destroy();
        }
    });
});