define(function(require, exports, module) {
    var Backbone = require('backbone');
    var BadgeModel =require('./badge');


    module.exports = Backbone.Collection.extend({
        model:BadgeModel
        , url : function(){
            return window.baseApiPath +'/api/badges';
        }
        , comparator: function(model){
            return -model.get('id');
        }
    });
});
