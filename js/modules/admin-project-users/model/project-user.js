define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            debugger;
            if (!this.get('id') ){
                return window.baseApiPath +'/api/projects/';
            }
            return window.baseApiPath +'/api/projects/'+this.get('id');
        }
    });
});
