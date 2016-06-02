define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'ListTask',
        template: '#showProject-project-taskPlan'
        ,initialize: function(options) {
            this.templateHelpers = this.templateHelpers || {};
            this.templateHelpers.getGroupId = _.bind(this.getGroupId, this);
        },
        events:{
            'click #deleteTaskPlan' :'deleteTaskPlan'
        }
        ,deleteTaskPlan : function(ev){
            if(confirm('Delete TaskPlan')){
                this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                    + this.model.id;
                this.model.destroy();
            }
        }

        , getGroupId: function() {
            return this.options.groupId;
        }
    });
});