/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var createTaskModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'createTask',
        template: '#createTask-layout',

        events:{
            'click #saveButton':'saveNewTask',
        },
        initialize:function(options){

            this.model = new createTaskModel({
                taskPlanId:options.taskPlanId,
                groupId:options.groupId,
            });
            this.model.fetch();
        },
        goHome:function(){
            Backbone.history.navigate('#show-projects', true);
        },
        saveNewTask : function() {

            var taskName = $('#taskName').val();
            var taskDescription = $('#taskDescription').val();

            this.model.set('name', taskName);
            this.model.set('description', taskDescription);
            var self=this;
            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects' , true);
            });
        },
    });
});
