define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var User =require('../model/model')
    module.exports = Marionette.Layout.extend({
        id: 'showBadges',
        template: '#updateUser-layout',

        regions: {
            updateInfo: "#updateInfo"
        },

        events:{
          'click #uploadBtn':"saveFile",
            'click #updateInfo':"updateUser"


        },

        initialize: function (options) {
          this.model= new User(
              {
                  id: options.id
              }
          )
        },
        updateUser: function() {
            var updateName = $('#Fname').val();
            var updateSurname = $('#surname').val();
            var updateImage ="http://localhost:8080/skillcatch/images/" + window.sessionStorage.imageUrl;
            var updatePassword=$('#password').val();
            var updateAddress=$('#address').val();
            var updatePhone=$('#phone').val();

            var self=this;
            this.model.set('name', updateName);
            this.model.set('surname', updateSurname);
            this.model.set('image', updateImage);
            this.model.set('password', updatePassword);
            this.model.set('address', updateAddress);
            this.model.set('phone', updatePhone);
            this.model.url = window.baseApiPath + "/api/loggedUser/" + this.id;
            this.model.save().always(function () {
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

        saveFile: function() {
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
                            document.getElementById('uploadedSuccessfully').innerHTML='<i class="fa fa-check" style="color:#00aa00">'+'</i>'+'Success!';
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
