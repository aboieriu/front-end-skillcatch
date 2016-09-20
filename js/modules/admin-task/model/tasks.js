define(function(require, exports, module) {
    var Backbone = require('backbone');
    var TaskModel =require('./task');


    module.exports = Backbone.Collection.extend({
        model:TaskModel
        , url : function(){
            return window.baseApiPath +'/api/tasks/';
        }
        , comparator: function(model){
            return -model.get('id');
        }
    });
});
