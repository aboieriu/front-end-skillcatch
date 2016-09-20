define(function(require, exports, module) {
    var Backbone = require('backbone');
    var BadgesModel =require('./badge');

    module.exports = Backbone.Collection.extend({
        model:BadgesModel
        , url : function(){
            return window.baseApiPath +'/api/badges';
        }
        , comparator: function(model){
            return -model.get('id');
        }
    });
});
