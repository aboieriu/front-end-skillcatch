/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var updateTaskPlanModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({

        id: 'update-Task',
        template: '#userUpdateTask-layout',

        events:{
            'click #saveButton':'saveNewTask',
            'click #ButtonDel' :'deleteTask'
        },
        initialize:function(options){

            this.model = new updateTaskPlanModel({
                taskPlanId:options.taskPlanId,
                groupId:options.groupId,
                taskId:options.taskId
            });
            this.model.fetch();
            this.listenTo(this.model,'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome:function(){
            Backbone.history.navigate('#show-projects', true);
        },
        saveNewTask : function() {

            var updateName = $('#updateName').val();
            var updateDescription = $('#updateDescription').val();
            var updateStatus = $('#updateStatus').val();

            this.model.set('name', updateName);
            this.model.set('description', updateDescription);
            this.model.set('status', updateStatus);
            var self=this;
            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects' , true);
            });
        },
        deleteTask : function(){

            var self=this;

           if(confirm('Delete Task?')){
               this.model.url = window.baseApiPath + '/api/projectGroup/' + this.options.groupId + '/taskPlan/'
                   + this.options.taskPlanId + '/task/' + this.options.taskId;
               this.model.destroy().always(function(){
               window.history.back();
           });}
        }
    });
});
