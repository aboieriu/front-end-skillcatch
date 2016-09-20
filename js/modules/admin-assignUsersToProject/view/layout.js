define(function(require, exports, module) {
    var Marionette = require('marionette');
    var Users = require('../model/users');
    var UserCollectionView = require('./user-collection-view');
    var Project=require('../../admin-project/model/project');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-assignUsersToProject-layout'
        , ui: {
            users:'.users-to-assign'

        }

        , initialize: function() {
            var self=this;
            this.userCollection = new Users();
            this.userCollection.projectId=new Project({projectId:this.options.model.id});
            this.userCollection.fetch();
            this.listenTo(this.userCollection, 'assignUserEvent', function(){
                self.options.model.trigger('assignUserEvent');
            });

        }
        , onRender: function() {
            this.ui.users.append(new UserCollectionView({collection:this.userCollection}).render().$el);
        }

    });
});
