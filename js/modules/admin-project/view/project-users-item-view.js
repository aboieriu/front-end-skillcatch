define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-project-project-users-item-view'
        , className: 'clickable'
        , events: {
            'click .removeUserFromProject':'removeUserFromProject',
             'click':'goToAssignedUser'
        },

        removeUserFromProject: function(ev) {
            ev.stopPropagation();
            this.model.url=window.baseApiPath+'/api/projects/'+this.model.collection.projectId.get('projectId')+'/removeUserFromProject/'+this.model.id;
            this.model.destroy();
            Backbone.history.location.reload();

        },

        goToAssignedUser:function () {
            Backbone.history.navigate("#admin-assignedUser/"+this.model.get('id')+"/hasProject/"+this.options.model.collection.projectId.get('projectId'), true);
        }
    });
});
