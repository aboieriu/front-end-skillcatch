define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Users = require('../model/projects');
    var UserCollectionView = require('./project-users-collection-view');
    var Project=require('../model/project');


    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-project-project-users-layout'
        , ui: {
            users:'.project-users'
        }

        , initialize: function(options) {
            this.masterModel = options.model;
            this.listenTo(this.masterModel, 'sync', this.render);


        }
        , onRender: function() {
            var ProjectUsersCollection = new Users(this.masterModel.get('users'));
            ProjectUsersCollection.projectId=new Project({projectId:this.options.model.id});
            this.ui.users.append(new UserCollectionView({collection:ProjectUsersCollection}).render().$el);

        }


    });
});

