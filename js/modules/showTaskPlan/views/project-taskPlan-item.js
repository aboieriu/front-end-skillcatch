/**
 * Created by amusat on 5/4/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'project-taskPlan-item',
        template: '#showTaskPlan-project-taskPlan-item'
        ,   events:{
            'click #task':'getUrl',
        },
        initialize: function(options) {
        this.templateHelpers = this.templateHelpers || {};
        this.templateHelpers.getUrl = _.bind(this.getUrl, this);
    }

        , getTaskPlanId: function() {
            return this.options.taskPlanId;
        },
        getUrl: function(){
                var x = document.URL;
                return x;
            }
    });
});