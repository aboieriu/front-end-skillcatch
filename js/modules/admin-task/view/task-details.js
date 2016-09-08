define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Task=require('../model/task');

    module.exports = Marionette.ItemView.extend({
        template: '#admin-task-task-details-view'
        ,ui:{
            statusSelect:'.admin-taskStatusSelect'
        }
        ,events:{
            'click .admin-taskUpdateButton':'updateTaskStatus'
        },

        updateTaskStatus:function () {
            this.model.set({status:this.ui.statusSelect.val()});
            var updateTask= new Task(this.model);
            updateTask.save().always(function () {
                    document.getElementById('admin-updateSuccessfully').style.display='block';

            });

        }
    });
});
