define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-taskplan-taskplan-item-view'
        , className: 'clickable'
        , events: {
            'click .removeTaskplan':'removeTaskplan'
            , 'click':'goToTaskplan'
        }

        , goToTaskplan: function(){
            Backbone.history.navigate("#admin-taskplans/"+this.model.get('id'), true);
        }
        , removeTaskplan: function(ev) {
            ev.stopPropagation();
            this.model.destroy();
        }
    });
});