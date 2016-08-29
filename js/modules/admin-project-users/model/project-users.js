define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ProjectUser =require('./project-user');

    module.exports = Backbone.Collection.extend({
        model:ProjectUser
        , url : function(){
            return window.baseApiPath +'/api/projects';
        }
        , comparator: function(model){
            return -model.get('id');
        }
    });
});

