/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateTaskModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'createBadge',
        template: '#createBadge-layout',

        events:{
            'click #saveButton':'saveNewBadge',
        },
        initialize:function(options){

            this.model = new CreateTaskModel({
                taskPlanId:options.taskPlanId,
                groupId:options.groupId,
                taskId:options.taskId
            });
            this.model.fetch();
        },
        goHome:function(){
            Backbone.history.navigate('#show-projects', true);
        },
        saveNewBadge : function() {

            var createName = $('#badgeName').val();
            var createDescription = $('#badgeDescription').val();

            this.model.set('name', createName);
            this.model.set('description', createDescription);
            var self=this;
            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects' , true);
            });
        },
    });
});
