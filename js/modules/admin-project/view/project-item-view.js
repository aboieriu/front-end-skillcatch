define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-project-project-item-view'
        , className: 'clickable'
        , events: {
            'click .removeProject':'removeProject'
            , 'click':'goToProject'
        }
        , goToProject: function(){
            Backbone.history.navigate("#admin-projects/"+this.model.get('id'), true);
        }
        , removeProject: function(ev) {
            ev.stopPropagation();
            this.model.destroy();
        }
    });
});