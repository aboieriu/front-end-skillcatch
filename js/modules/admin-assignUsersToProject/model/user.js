define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({

        url : function(){
            if (!this.get('id') ){
                return window.baseApiPath +'/api/users/projectUnAssignedUsers/'+this.projectId.get('projectId');
            }
            return window.baseApiPath +'/api/users/'+this.get('id')+'/assignToProject/'+this.get('collection').projectId.get('projectId');
        }
    });
});

