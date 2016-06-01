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
            this.listenTo(this.model,'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome:function(){
            Backbone.history.navigate('#show-projects', true);
        },
        saveNewProject : function() {
            var updateName = $('#updateName').val();
            var updateDescription = $('#updateDescription').val();
            var updateStatus = $('#updateStatus').val();

            this.model.set('name', updateName);
            this.model.set('descriptions', updateDescription);
            this.model.set('status', updateStatus);

            this.model.url = window.baseApiPath +'/api/projectGroup/' + this.id;

            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects', true);
            });
        },
        deleteProject : function(){


            if(confirm('Delete Project')){
                this.model.url = window.baseApiPath +'/api/projectGroup/' + this.id;
                this.model.destroy().always(function(){
                    Backbone.history.navigate('#show-projects',true)
                });
            }

        }
    });
});
