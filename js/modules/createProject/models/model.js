/**
 * Created by amusat on 5/23/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({

        url: 'http://localhost:8080/skillcatch/api/projectGroup'
    });
});