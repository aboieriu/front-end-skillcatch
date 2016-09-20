define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Users = require('../model/users');
    var User = require('../model/user');
    var UserTaskPlansCollectionView = require('./user-taskPlans-collection-view');



    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-user-user-taskPlans-layout'
        , ui: {
            userTaskPlans:'.userTaskPlans-container'
            , name: '.form-name'
            , description: '.form-description'
        }

        , initialize: function(options) {
            this.userMasterModel = options.model;
            this.listenTo(this.userMasterModel, 'sync', this.render);


        }
        , onRender: function() {
            var UserTaskPlansCollection = new Users(this.userMasterModel.get('taskPlans'));
            UserTaskPlansCollection.userId=new User({userId:this.options.model.id});
            this.ui.userTaskPlans.append(new UserTaskPlansCollectionView({collection:UserTaskPlansCollection}).render().$el);

        }



    });
});

