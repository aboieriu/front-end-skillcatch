define(function(require, exports, module) {
    var Marionette = require('marionette');

    Marionette.ItemView.prototype.serializeData = function( templateId, data ){
        var data = {};

        if (this.model) {
            data = { model: this.model.toJSON() }
        }
        else if (this.collection) {
            data = { items: this.collection.toJSON() };
        }

        return data;
    };

    Marionette.CompositeView.prototype.serializeData = function( templateId, data ){
        var data = {};

        if (this.model){
            data = { model: this.model.toJSON() }
        }

        return data;
    }
});