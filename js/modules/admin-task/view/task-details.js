define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Task=require('../model/task');

    module.exports = Marionette.ItemView.extend({
        template: '#admin-task-task-details-view'
        ,ui:{
            statusSelect:'.admin-taskStatusSelect'
            ,taskName:'#taskName'
            ,taskDescription:'#taskDescription'
        }
        ,events:{
            'click .admin-taskUpdateButton':'updateTaskStatus'
        },
        initialize:function (options) {
            this.task=options.model;
            this.targetTaskModel=new Task({id:options.model.id});
            this.listenTo(this.task, 'sync', this.render);
        },

        updateTaskStatus:function () {
            var self=this;
            var targetTaskModel = {
                name: this.ui.taskName.val()
                , description: this.ui.taskDescription.val()
                ,status:this.ui.statusSelect.val()
            };

            this.targetTaskModel.set(targetTaskModel);
            this.targetTaskModel.save().always(function () {
                self.task.fetch();
            })

        }
    });
});
