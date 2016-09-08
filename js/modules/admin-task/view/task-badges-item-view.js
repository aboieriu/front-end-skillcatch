define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');


    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-task-task-badges-item-view'
        , className: 'clickable'
        , events: {
            'click .removeBadge':'removeBadge'

        },

        removeBadge: function(ev) {
            ev.stopPropagation();
            this.model.url=window.baseApiPath+'/api/tasks/'+this.model.collection.taskId.get('taskId')+'/removeBadgeFromTask/'+this.model.id;
            this.model.destroy();
            Backbone.history.location.reload();

        }
    });
});
