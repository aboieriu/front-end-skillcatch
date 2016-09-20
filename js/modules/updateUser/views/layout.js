define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var User =require('../model/model');
    module.exports = Marionette.Layout.extend({
        id: 'showBadges',
        template: '#updateUser-layout',
        regions: {
            updateInfo: "#updateInfo"
        },
        events:{
          'click #updateInfo':"saveFile"

        },

        initialize: function (options) {
          this.model= new User({id: options.id});
          this.saveFile.userId=this.model;
        },

        saveFile: function() {
            var that=this.model;
            $(document).ready(function () {
                $('#imageUploadForm').on('submit',(function(e) {
                    e.preventDefault();
                    var formData = new FormData($(this)[0]);

                    var file_data = $("#uploadedFile").prop("files")[0];
                    $.ajax({
                        type:'POST',
                        url: "http://localhost:8080/skillcatch/api/loggedUser/upload",
                        data:formData,
                        cache:false,
                        contentType: false,
                        processData: false,
                        success:function(data){
                            window.sessionStorage.imageUrl = data;
                            var uploadedProfilePicture="http://localhost:8080/skillcatch/images/" + window.sessionStorage.imageUrl;
                            this.updateUser(uploadedProfilePicture);
                        },
                        updateUser: function(uploadedProfilePicture) {
                            var self=this;
                            var updateName = $('#Fname').val();
                            var updateSurname = $('#surname').val();
                            var updatePassword=$('#password').val();
                            var updateAddress=$('#address').val();
                            var updatePhone=$('#phone').val();


                            that.set('name', updateName);
                            that.set('surname', updateSurname);
                            that.set('image', uploadedProfilePicture);
                            that.set('password', updatePassword);
                            that.set('address', updateAddress);
                            that.set('phone', updatePhone);
                            that.url = window.baseApiPath + "/api/loggedUser/" + that.id;
                            that.save().always(function () {
                                self.logout();
                            })


                        },
                        logout: function(){
                            $.ajax({
                                type: "POST",
                                url: window.baseApiPath +  "/logout/",
                                success: function(data){
                                    Backbone.history.navigate('/#login', true);
                                    window.location.reload();
                                }
                            });

                        },
                        error: function(data){
                            console.log("error");
                            console.log(data);
                        }
                    });
                }));

                $("#uploadedFile").on("change", function() {
                    $("#imageUploadForm").submit();


                });
            });
        }
    });
});
