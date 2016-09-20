define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Task = require('./task');
    module.exports = Backbone.Collection.extend({
        model:Task
    });
});
