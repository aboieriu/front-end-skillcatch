define(function(require, exports, module) {
    var Backbone = require('backbone');
    var UserModel =require('./user');

    module.exports = Backbone.Collection.extend({
        model:UserModel
        , url : function(){
            return window.baseApiPath +'/api/users';
        }
        , comparator: function(model) {
            return -model.get('addedOn');
        }
    });
});
