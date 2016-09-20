define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskPlans = require('../model/projectUnAssignedTaskPlans');
    var User=require('../../admin-user/model/user');
    var TaskPlan=require('../model/projectUnAssignedTaskPlan');
    var TaskPlansCollectionView = require('./projectUnAssignedTaskPlans-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-assignIndividualTaskPlans-layout'
        , ui: {
            taskPlans:'.individual-taskPlans-container'
            ,name:'.form-name'
            ,description:'.form-description'
        },
        events:{
            'click .addNewTaskplan':'addNewTaskplan'
        }

        , initialize: function() {
            var self=this;
            this.allTaskPlans = new TaskPlans();
            this.allTaskPlans.userId=new User({userId:this.options.model.id});
            this.allTaskPlans.fetch();
            this.listenTo(this.allTaskPlans,'sync',this.render);
            this.listenTo(this.allTaskPlans,'assignIndividualTaskPlanEvent',function () {
                self.options.model.trigger('assignIndividualTaskPlanEvent');

            });

        }
        , onRender: function() {
            this.ui.taskPlans.append(new TaskPlansCollectionView({collection:this.allTaskPlans}).render().$el);
        }
        , addNewTaskplan: function(){
            var self = this;
            var taskPlanData = {
                name: this.ui.name.val()
                , description: this.ui.description.val()
            };

            var newTaskPlan = new TaskPlan(taskPlanData);
            newTaskPlan.save().always(function(){
                self.clearFields();
                self.allTaskPlans.fetch();
            })
        },
        clearFields:function () {
            document.getElementById('taskPlanName').value='';
            document.getElementById('taskPlanDescription').value='';

        }

    });
});