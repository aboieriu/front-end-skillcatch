define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'ListTask',
        template: '#showTask-badge'
        ,
        initialize: function(options) {
            this.templateHelpers = this.templateHelpers || {};
            this.templateHelpers.getUrl = _.bind(this.getUrl, this);
        }

        , getTaskId: function() {
            return this.options.taskId;
        },
        getUrl : function(){
            var x = document.URL;
            return x;
        }
    });
});