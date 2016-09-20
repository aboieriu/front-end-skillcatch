define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-user-user-taskPlans-item-view'
        , className: 'clickable'
        , events: {
            'click .removeUserTaskPlan':'removeUserTaskPlan'
            ,'click .user-individualTaskPlanClickAbleRow':'goToTaskPlan'

        }
        ,goToTaskPlan:function () {
            Backbone.history.navigate("#admin-taskplans/"+this.model.get('id'), true);
        }

        , removeUserTaskPlan: function(ev) {
            ev.stopPropagation();
            this.model.url=window.baseApiPath+'/api/users/'+this.model.collection.userId.get('userId')+'/removeTaskPlanFromUser/'+this.model.id;
            this.model.destroy();
            Backbone.history.location.reload();
        }
    });
});