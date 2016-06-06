define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'ListTask',
        template: '#showTask-badge'
        ,events:{
            'click #deleteBadge' :'deleteBadge'
        }
        ,deleteBadge : function(ev){
            if(confirm('Delete Badge')){
               this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                    + this.options.taskPlanId + '/task/' + this.options.taskId + '/badge/' +this.model.id ;
                this.model.destroy();
            }
        },
        initialize: function(options) {
            this.templateHelpers = this.templateHelpers || {};
            this.templateHelpers.getUrl = _.bind(this.getUrl, this);

        },
        onRender: function(){


        }

        , getTaskId: function() {
            return this.options.taskId;
        },
        getUrl : function(){
            var x = document.URL;
            return x;
        }
    });
});