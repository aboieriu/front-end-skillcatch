define(function(require, exports, module) {
    var Backbone = require('backbone');
    module.exports = Backbone.Model.extend({

        url : function(){
            debugger;
            if (!this.get('id')){
                debugger;
                return window.baseApiPath +'/api/tasks/';
            }

            return window.baseApiPath +'/api/tasks/'+ this.get('id');
        }
    });
});