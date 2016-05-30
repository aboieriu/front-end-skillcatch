define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'ListTask',
        template: '#showProject-project-taskPlan'
        ,initialize: function(options) {
            this.templateHelpers = this.templateHelpers || {};
            this.templateHelpers.getGroupId = _.bind(this.getGroupId, this);
        }

        , getGroupId: function() {
            return this.options.groupId;
        }
    });
});