define(function(require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');
    var projectsModel = require('./projectsModel');

    module.exports = Backbone.Collection.extend({
        model: projectsModel,
        url :function() {
            return window.baseApiPath + '/api/projectGroup/'
        }
    });
});
