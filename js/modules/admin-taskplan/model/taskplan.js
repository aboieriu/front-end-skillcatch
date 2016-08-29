/**
 * Created by amusat on 5/31/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            debugger;
            if (!this.get('id') ){
                return window.baseApiPath +'/api/taskplans/';
            }
            return window.baseApiPath +'/api/taskplans/'+ this.get('id');
        }
    });
});
