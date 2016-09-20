define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/users/';
            }
            return window.baseApiPath +'/api/users/'+this.get('collection').userId.get('userId')+'/assignTaskPlanToUser/'+ this.get('id');
        }
    });
});
