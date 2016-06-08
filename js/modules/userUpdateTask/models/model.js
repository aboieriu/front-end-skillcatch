define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({
        url :function() {

            var skillCatchData = window.sessionStorage.skillCatchData;
            if (!skillCatchData) {
                throw new Error("Unable to find logged user data");
            }
            return   window.baseApiPath + '/api/user/' + JSON.parse(skillCatchData).userId + '/tasks/' + this.get('taskId');
        }
    });
});
