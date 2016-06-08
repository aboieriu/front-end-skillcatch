define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var $ = require('jquery');
    var Projects = require('./project-lists');
    var Project = require('../models/projectCollection');
    module.exports = Marionette.Layout.extend({
        template: '#assignedProjects-layout',
        regions: {
            showProjectDetails:'#assignedProjects'
        },
        initialize: function(options){



        },
        onRender: function () {
            var self = this;
            var projectDetailsModel = new Project();
            projectDetailsModel.fetch().then(function(options){
                self.showProjectDetails.show(new Projects({

                    collection: new Backbone.Collection(options)
            }));

            });
        }
    });

});