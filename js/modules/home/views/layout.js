define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var $ = require('jquery');
    var ProjectModel = require('modules/showProjects/models/project');
    var UserDetailsModel =require('../models/userDetailsModel');
    var UserDetails = require('./userDetails');
    var Projects = require('./project-lists');
    var Project = require('../models/projectCollection');
    module.exports = Marionette.Layout.extend({
        id: 'home',
        template: '#home-layout',
        regions: {
            showUser:"#show-user",
            showProjectDetails:'#show-ProjectDetails'
        },
        initialize: function(options){
            var userModel = new UserDetailsModel({
                userId:this.userId
            });
            this.model= new Project();
            this.model.fetch();


        },
        onRender: function () {
            var self = this;
            var projectDetailsModel = new Project();
            projectDetailsModel.fetch().then(function(options){
                var count= projectDetailsModel.length;
                document.getElementById("count-project").innerHTML = count;
                self.showProjectDetails.show(new Projects({
                    collection: new Backbone.Collection(options)
                }));
                debugger;
            });
            this.model = new UserDetailsModel();
            this.model.fetch().then(function(options) {
                self.showUser.show(new UserDetails({
                    model: new Backbone.Model(options),
                }));
            });

        }
    });

});