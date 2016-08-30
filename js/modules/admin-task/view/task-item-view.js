define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');


    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-task-task-item-view'
        , className: 'clickable'
        , events: {
            'click .removeTask':'removeTask'
            , 'click':'goToTask'
        },

        goToTask: function(){
            Backbone.history.navigate("#admin-tasks/"+this.model.get('id'), true);
        },

         removeTask: function(ev) {
            ev.stopPropagation();
            this.model.destroy();


        }
    });
});