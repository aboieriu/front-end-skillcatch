define(function(require, exports, module) {
    var Backbone = require('backbone');

    module.exports = Backbone.Collection.extend({
        url : function(){
            return window.baseApiPath +'/api/loggedUser/own-tasks-plans';
        }
    });
});
