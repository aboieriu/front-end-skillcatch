/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateProjectModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'createProject',
        template: '#createProject-layout',

        events:{
            'click #saveButton':'saveNewProject'
        },
        initialize:function(){
            this.model = new CreateProjectModel();
        },

        saveNewProject : function() {
            var projectName = $('#projectName').val();
            var projectDescription = $('#projectDescription').val();
            var projectStatus = $('#projectStatus').val();


            this.model.set('name', projectName);
            this.model.set('descriptions', projectDescription);
            this.model.set('status', projectStatus);


            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects', true);
            });
        }
    });
});
