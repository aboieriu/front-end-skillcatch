define(function(require, exports, module) {


    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#admin-user-user-details-view'
        , ui: {
            name: '#firstName'
            ,surname: '#surname'
            ,username:'#username'
            ,password:'#password'
            ,phone:'#phone'
            ,address:'#address'
            ,email:'#email'
        }
        , events: {
            'click #userEditButton':'editUser'
        },
        initialize:function (options) {
            this.targetUserModel=options.model;

        },

        editUser:function () {
            var self = this;
            var userData = {
                name: this.ui.name.val()
                ,surname: this.ui.surname.val()
                ,username:this.ui.username.val()
                ,password:this.ui.password.val()
                ,phone:this.ui.phone.val()
                ,address:this.ui.address.val()
                ,email:this.ui.email.val()
            };

            this.targetUserModel.set(userData);
            this.targetUserModel.save().always(function () {
                self.targetUserModel.fetch();
            })
        }
    });
});
