/**
 * Created by amusat on 5/4/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'project-taskPlan-item',
        template: '#showProject-project-taskPlan-item',
        events:{
            'click #deleteTaskPlan' :'deleteTaskPlan'
        }
        ,deleteTaskPlan : function(ev){
            if(confirm('Delete TaskPlan')){
                this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                    + this.options.id;
                this.model.destroy();
            }
        }
    });
});