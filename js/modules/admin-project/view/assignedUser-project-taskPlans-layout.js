define(function(require, exports, module) {
    var Marionette = require('marionette');
    var TaskPlans = require('../../admin-taskplan/model/taskplans');
    var User=require('../../admin-user/model/user');
    var AssignedUserProjectTaskPlansCollectionView = require('./assignedUser-project-taskPlans-collection-view');



    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-assignedUser-project-taskPlans-layout'
        , ui: {
            assignedUserProjectTaskPlans:'.assignedUserProjectTaskPlans'
        }

        , initialize: function(options) {
            this.masterModel = options.model;

        }
        , onRender: function() {
            var AssignedUserProjectTaskPlansCollection = new TaskPlans(this.masterModel.get('taskPlans'));
            AssignedUserProjectTaskPlansCollection.userId=new User({userId:this.options.userId});
            this.ui.assignedUserProjectTaskPlans.append(new AssignedUserProjectTaskPlansCollectionView({collection:AssignedUserProjectTaskPlansCollection}).render().$el);

        }


    });
});

