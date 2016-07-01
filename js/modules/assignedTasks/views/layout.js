define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Tasks = require('./task-list');
    var Task = require('../models/taskCollection');
    module.exports = Marionette.Layout.extend({
        template: '#assignedTasks-layout',
        regions: {
            showTaskDetails: '#assignedTaskItems'
        },
        initialize: function (options) {


        },
        onRender: function () {
            var self = this;
            var taskModel = new Task();
            taskModel.fetch().then(function (options) {
                self.showTaskDetails.show(new Tasks({
                    collection: new Backbone.Collection(options)
                }));

            });
        }
    });

});