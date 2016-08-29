define(function(require, exports, module) {
    var Backbone = require('backbone');
    var User =require('./user');

    module.exports = Backbone.Collection.extend({
        model:User
        , url : function(){
            return window.baseApiPath +'/api/users';
        }
        , comparator: function(model){
            return -model.get('id');
        }
    });
});
