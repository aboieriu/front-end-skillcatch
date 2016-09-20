define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-taskplan-taskplan-badges-item-view'
        , className: 'clickable'
        , events: {
            'click .removeTaskplanBadges':'removeTaskplanBadges'

        }
        , removeTaskplanBadges: function(ev) {
            ev.stopPropagation();
            this.model.url=window.baseApiPath+'/api/taskplans/'+this.model.collection.taskplanId.get('taskplanId')+'/removeBadgeFromTaskPlan/'+this.model.id;
            this.model.destroy();
            Backbone.history.location.reload();
        }
    });
});