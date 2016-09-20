define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/taskplans';
            }
            return window.baseApiPath +'/api/taskplans/'+ this.get('id');
        }
    });
});