/**
 * Created by amusat on 6/1/2016.
 */
define(function(require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');
    var projectsModel = require('./projectsModel');

    module.exports = Backbone.Model.extend({
        url :function() {
            return window.baseApiPath + '/api/projectGroup/'
        }
    });
});
