define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ProjectModel =require('./project-model')

    module.exports = Backbone.Collection.extend({
        model:ProjectModel
        , url : function(){
            return window.baseApiPath +'/api/loggedUser/assignedProjects';
        }
    });
});
