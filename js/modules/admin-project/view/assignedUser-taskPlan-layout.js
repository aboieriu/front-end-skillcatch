define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Users = require('../../admin-user/model/users');
    var User=require('../../admin-user/model/user');
    var UserTaskPlansCollectionView = require('./assignedUser-taskPlan-collection-view');



    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-assignedUser-taskPlan-layout'
        , ui: {
            userTaskPlans:'.taskplans-container'
        }

        , initialize: function(options) {
            this.masterModel = options.model;
            this.listenTo(this.masterModel, 'sync', this.render);


        }
        , onRender: function() {
            var UserTaskPlansCollection = new Users(this.masterModel.get('taskPlans'));
            UserTaskPlansCollection.userId=new User({userId:this.options.model.id});
            this.ui.userTaskPlans.append(new UserTaskPlansCollectionView({collection:UserTaskPlansCollection}).render().$el);

        }


    });
});

