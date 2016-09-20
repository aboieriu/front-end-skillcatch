define(function(require, exports, module) {
    var Marionette = require('marionette');
    var moment=require('moment');
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
            'click .addUser':'prepareAddUser'
        }

        , initialize: function(options) {
            this.userCollection = new Users();
            this.userCollection.fetch();
            this.prepareAddUser.adminUserCollection=this.userCollection;
        }
        , onRender: function() {
            this.ui.users.append(new UserCollectionView({collection:this.userCollection}).render().$el);
        },

        prepareAddUser: function () {
            var that = this.userCollection;
            $(document).ready(function () {
                $('#imageUploadForm').on('submit', (function (e) {
                    e.preventDefault();

                    var formData = new FormData($(this)[0]);
                    var file_data = $("#formUserAvatar").prop("files")[0];

                    $.ajax({
                        type: 'POST',
                        url: window.baseApiPath+"/api/loggedUser/upload",
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            var uploadedBadgePicture = window.baseApiPath+"/images/" + data;
                            this.addUser(uploadedBadgePicture);
                        },
                        addUser: function (uploadedBadgePicture) {
                            var self = this;
                            var userData = {
                                username:$('#formUsername').val()
                                , name: $('#formFirstName').val()
                                , surname: $('#formLastName').val()
                                , email: $('#formEmail').val()
                                , password: $('#formPassword').val()
                                ,image:uploadedBadgePicture
                            };
                            var newUser = new User(userData);
                            newUser.save().always(function(){
                                self.clearFields();
                                that.fetch()

                            })
                        },
                        clearFields: function () {
                            document.getElementById('formUsername').value='';
                            document.getElementById('formFirstName').value='';
                            document.getElementById('formLastName').value='';
                            document.getElementById('formEmail').value='';
                            document.getElementById('formPassword').value='';
                            document.getElementById('formUserAvatar').value='';
                        },
                        error: function (data) {
                            console.log("error");
                            console.log(data);
                        },

                    });

                }));


            });

        }
    });
});