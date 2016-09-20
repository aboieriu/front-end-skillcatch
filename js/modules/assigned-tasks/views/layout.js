define(function (require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var IndividualTaskPlans = require('../../task-plan/model/own-task-plans');
    var TaskplanCollectionView = require('./taskplan-collection-view');
    module.exports = Marionette.Layout.extend({
        template: '#assigned-tasks-layout',
        regions: {
            showTaskPlans: '.individual-task-plans'
        }
        , initialize: function(){
            this.collection = new IndividualTaskPlans();
            this.collection.comparator = function(model) {
                return model.get('id');
            };
            this.collection.fetch();
            this.listenTo(this.collection, 'task-updated', function(){
                this.collection.fetch();
                app.master.fetch();
            });
        }
        , onRender: function(){
            this.showTaskPlans.show(new TaskplanCollectionView({collection:this.collection}));
        }
    });

});