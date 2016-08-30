define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({
        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/badges';
            }
            return window.baseApiPath +'/api/tasks/'+this.get('collection').taskId.get('taskId')+'/awardBadge/'+ this.get('id');
        }
    });
});