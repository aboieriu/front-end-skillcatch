define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName:'li'
        , template: '#badge-user-task-badges-view'
        , onRender: function(){
            if (!this.model.get('gained')) {
                this.$el.addClass('pending');
            }
        }
    });
});