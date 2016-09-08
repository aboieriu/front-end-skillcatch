define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ProjectModel =require('./project');

    module.exports = Backbone.Collection.extend({
        model:ProjectModel
        , url : function(){
            return window.baseApiPath +'/api/projects';
        }
        , comparator: function(model){
            return -model.get('createdOn');
        }
    });
});
