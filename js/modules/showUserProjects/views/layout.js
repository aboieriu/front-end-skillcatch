define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Projects = require('./project-list');
    var Project = require('../models/project');
    var ProjectM = require('../models/deleteModel');
    var deleteProjectModel = require('modules/showProject/models/projectModel');
    module.exports = Marionette.Layout.extend({
        groupId: 'showProjects',
        template: '#showProjects-layout',

        regions: {
            showProjects: "#show-projectDetails"
        },
        events:{
            'click #deleteProject' :'deleteProject'
        },
        initialize: function (options) {
            this.model = new Project({id:options.id});
            this.model.fetch
            this.listenTo(this.model,'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },

        onRender: function () {
            var self = this;
            var projectModel = new Project();


            projectModel.fetch().then(function(options) {
                self.showProjects.show(new Projects({
                    collection: new Backbone.Collection(options),
                    groupId: self.id
                }));

            });


        },
        deleteProject : function(options,id){

           this.model = new Project({id:id});
           this.model.fetch();
            if(confirm('Delete Project')){
                this.model.url = window.baseApiPath +'/api/projectGroup/'+  this.options.id ;
                this.model.destroy().always(function(){
                    Backbone.history.navigate('#show-projects',true)
                });
            }

        }
    });
});
