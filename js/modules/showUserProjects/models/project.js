define(function(require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');
    var projectsModel = require('./projectsModel');

    module.exports = Backbone.Collection.extend({
        model: projectsModel,
        url :function() {
            var skillCatchData = window.sessionStorage.skillCatchData;
            if (!skillCatchData) {
                throw new Error("Unable to find logged user data");
            }
            return   window.baseApiPath + '/api/user/' + JSON.parse(skillCatchData).userId + '/assignedProjects';
        }
    });
});
