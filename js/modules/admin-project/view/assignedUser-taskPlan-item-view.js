define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-project-assignedUser-taskPlan-item-view'
        , className: 'clickable'
        , events: {
            'click .removeUserTaskPlan':'removeUserTaskPlan'

        }

        , removeUserTaskPlan: function(ev) {
            ev.stopPropagation();
            this.model.url=window.baseApiPath+'/api/users/'+this.model.collection.userId.get('userId')+'/removeTaskPlanFromUser/'+this.model.id;
            this.model.destroy();
            Backbone.history.location.reload();
        }
    });
});