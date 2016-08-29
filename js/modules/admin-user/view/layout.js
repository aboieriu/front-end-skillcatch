define(function(require, exports, module) {
    var Marionette = require('marionette');
    var User = require('../model/user');
    var Users = require('../model/users');
    var UserCollectionView = require('./user-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-user-layout'
        , ui: {
            users:'.users-container'
            ,fname:'.form-fname'
            , lname:'.form-lname'
            , username:'.form-username'
            , email:'.form-email'
            , password:'.form-password'
            , image:'.form-userAvatar'
        }
        , events: {
            'click .addUser':'addUser'
        }
        , addUser: function() {
            var self = this;
            var userData = {
                username:this.ui.username.val()
                , name: this.ui.fname.val()
                , surname: this.ui.lname.val()
                , email: this.ui.email.val()
                , password: this.ui.password.val()
                ,image:this.ui.image.val()
            };

            var newUser = new User(userData);
            newUser.save().always(function(){
                self.userCollection.fetch();
            });
        }
        , initialize: function(options) {
            this.userCollection = new Users();
            this.userCollection.fetch();
        }
        , onRender: function() {
            this.ui.users.append(new UserCollectionView({collection:this.userCollection}).render().$el);
        }
    });
});