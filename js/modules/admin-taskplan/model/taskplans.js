define(function(require, exports, module) {
    var Backbone = require('backbone');
    var TaskplanModel =require('./taskplan');

    module.exports = Backbone.Collection.extend({
        model:TaskplanModel
        , url : function(){
                return window.baseApiPath + '/api/taskplans';

        }
        , comparator: function(model){
            return -model.get('id');
}
});
});
