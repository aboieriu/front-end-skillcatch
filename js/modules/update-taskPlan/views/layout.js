/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var updateTaskPlanModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({

        id: 'update-taskPlan',
        template: '#update-taskPlan-layout',

        events:{
            'click #saveButtonCom':'saveNewTaskPlan',
            'click #ButtonDel' :'deleteTaskPlan'
        },
        initialize:function(options){

            this.model = new updateTaskPlanModel({
                taskPlanId:options.taskPlanId,
                groupId:options.groupId
            });
            this.model.fetch();
            this.listenTo(this.model,'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome:function(){
            Backbone.history.navigate('#show-projects', true);
        },
        saveNewTaskPlan : function() {

            var updateName = $('#updateName').val();
            var updateDescription = $('#updateDescription').val();

            this.model.set('name', updateName);
            this.model.set('description', updateDescription);
            var self=this;
            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects' , true);
            });
        },

        deleteTaskPlan : function(){

            this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                + this.options.taskPlanId;
            var self=this;
            if (document.getElementById('#dialog-confirm').confirm('Vrei sa stergi obiectul selectat?')) {
                this.model.destroy().always(function(){
                    Backbone.history.navigate('#show-project/'+ self.options.groupId , true);
                });
            }

        }
    });
});
