define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Tasks = require('../model/tasks');
    var TaskCollectionView = require('./task-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-task-layout'
        , ui: {
            tasks:'.tasks-container'
            , name: '.form-name'
            , description: '.form-description'
            , status:'.form-status'
        }
        , events: {
            'click .addTask':'addTask'

        }

        , initialize: function(options) {
            this.masterModel = options.model;
            this.listenTo(this.masterModel, 'sync', this.render);

        }
        , onRender: function() {
            var taskCollection = new Tasks(this.masterModel.get('tasks'));
            this.ui.tasks.append(new TaskCollectionView({collection:taskCollection}).render().$el);
        }
        , addTask: function() {
            var self = this;
            var taskData = {
                name: this.ui.name.val()
                , description: this.ui.description.val()
                , status: this.ui.status.val()
            };

            this.masterModel.get('tasks').push(taskData);
            debugger;
            this.masterModel.save().always(function(){
                self.masterModel.fetch();
            })

        }
    });
});