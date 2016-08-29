/**
 * Created by amusat on 5/31/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/projects/';
            }
            return window.baseApiPath +'/api/projects/'+ this.get('id');
        }
    });
});
