define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Collection.extend({
        comparator: function(model) {
            return -!model.get('gained');
        }
    });
});
