define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'ListTask',
        template: '#showTaskPlan-task'
        ,  events:{
            'click #task':'getUrl',
            'click #deleteTask' :'deleteTask'
        }
        ,deleteTask : function(ev){
            if(confirm('Delete Task')){
                this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                    + this.options.taskPlanId +'/task/' +this.model.id;
                this.model.destroy();
            }
        },
        initialize: function(options) {
            this.templateHelpers = this.templateHelpers || {};
            this.templateHelpers.getUrl = _.bind(this.getUrl, this);
        }

        , getTaskPlanId: function() {
            return this.options.taskPlanId;
        },
        getUrl : function(){
            var x = document.URL;
            return x;
        }
    });
});