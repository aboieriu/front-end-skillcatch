/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({
        url :function() {
            return   window.baseApiPath + '/api/projectGroup/' + this.id ;
        }
    });
});
