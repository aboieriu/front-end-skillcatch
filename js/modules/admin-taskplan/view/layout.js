define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskplanCollectionView = require('./taskplan-collection-view');
    var TaskPlans = require('../model/taskplans');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-taskplan-layout'
        , ui: {
            taskplans:'.taskplans-container'
            , name: '.form-name'
            , description: '.form-description'
        }
        , events: {
            'click .addTaskplan':'addTaskplan'

        }
        , initialize: function(options) {
            this.masterModel = options.model;
            this.listenTo(this.masterModel, 'sync', this.render);


        }
        , onRender: function() {
            var taskPlansCollection = new TaskPlans(this.masterModel.get('taskPlans'));
            this.ui.taskplans.append(new TaskplanCollectionView({collection:taskPlansCollection}).render().$el);
        }
        , addTaskplan: function(){
            var self = this;
            var taskplanData = {
                name: this.ui.name.val()
                , description: this.ui.description.val()
            };
            debugger;
            this.masterModel.get('taskPlans').push(taskplanData);
            debugger;
            this.masterModel.save().always(function(){
                self.masterModel.fetch();
            })
        },

    });
});