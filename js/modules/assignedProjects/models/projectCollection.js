define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Model =require('./project-model')

    module.exports = Backbone.Collection.extend({
        model:Model,
        url :function() {
            var skillCatchData = window.sessionStorage.skillCatchData;
            if (!skillCatchData) {
                throw new Error("Unable to find logged user data");
            }
            return   window.baseApiPath + '/api/user/' + JSON.parse(skillCatchData).userId + '/assignedProjects';
        }
    });
});
