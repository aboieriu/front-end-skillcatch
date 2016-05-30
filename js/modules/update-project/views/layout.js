/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var updateProjectModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'update',
        template: '#update-project-layout',

        events:{
            'click #saveButton':'saveNewProject',
            'click .ButtonDel' :'deleteProject'
        },
        initialize:function(options){
            this.model = new updateProjectModel({

                id:options.id
            });
            this.model.fetch();
        },
        goHome:function(){
            Backbone.history.navigate('#articole', true);
        },
        saveNewProject : function() {
            var updateName = $('#updateName').val();
            var updateDescription = $('#updateDescription').val();

            this.model.set('name', updateName);
            this.model.set('descriptions', updateDescription);

            this.model.url = window.baseApiPath +'/api/projectGroup/' + this.id;

            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects', true);
            });
        },
        deleteProject : function(){
            this.model.url = window.baseApiPath +'/api/projectGroup/' + this.id;
            this.model.destroy().always(function(){
                Backbone.history.navigate('#show-projects', true);
            });

        }
    });
});
