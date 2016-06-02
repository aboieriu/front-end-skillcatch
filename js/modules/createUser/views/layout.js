/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var createUser = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'createUser',
        template: '#createUser-layout',

        events:{
            'click #saveButton':'saveNewTask',
        },
        initialize:function(options){

            this.model = new createUser({
                taskPlanId:options.taskPlanId,
                groupId:options.groupId,
            });
            this.model.fetch();
        },
        goHome:function(){
            Backbone.history.navigate('#show-projects', true);
        },
        saveNewTask : function() {

            var userName = $('#userName').val();
            var userFirstName = $('#userFirstName').val();
            var userSurName = $('#userSurName').val();
            var userEmail= $('#userFirstName').val();

            this.model.set('userName', userName);
            this.model.set('name', userFirstName);
            this.model.set('surname', userFirstName);
            this.model.set('email', userEmail);
            var self=this;
            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects' , true);
            });
        },
    });
});
