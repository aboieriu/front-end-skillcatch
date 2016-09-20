define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#admin-badge-badge-details-view'
        , ui: {
            badgeName: '#badgeName'
            , badgeDescription: '#badgeDescription'
            , badgePoints:'#badgePoints'
            , badgeImage:'#badgeImage'
        }
        , events: {
            'click #badgeEditButton':'collectBadgeDetails'
        },
        initialize:function (options) {
            this.targetBadgeModel=options.model;
            this.listenTo(this.targetBadgeModel, 'sync', this.render);
            this.collectBadgeDetails.badgeModel=this.targetBadgeModel;
        },
        collectBadgeDetails:function () {
            var that = this.targetBadgeModel;
            $(document).ready(function () {
                $('#editBadgeFrom').on('submit', (function (e) {
                    e.preventDefault();

                    var formData = new FormData($(this)[0]);
                    var file_data = $("#badgeImage").prop("files")[0];

                    $.ajax({
                        type: 'POST',
                        url: "http://localhost:8080/skillcatch/api/badges/upload",
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (data, self) {
                            window.sessionStorage.imageUrl = data;
                            var uploadedBadgePicture = "http://localhost:8080/skillcatch/images/badges/" + window.sessionStorage.imageUrl;
                            this.editBadge(uploadedBadgePicture);
                        },
                        editBadge: function (uploadedBadgePicture) {
                            var self = this;
                            var badgeData = {
                                name: $('#badgeName').val()
                                , points: $('#badgePoints').val()
                                , description: $('#badgeDescription').val()
                                , image: uploadedBadgePicture
                                , gained: false

                            };
                            that.set(badgeData);
                            that.save().always(function () {
                                self.clearFields();
                                that.fetch();
                            })
                        },
                        clearFields: function () {
                            document.getElementById('badgeName').value = '';
                            document.getElementById('badgePoints').value = '';
                            document.getElementById('badgeDescription').value = '';
                            document.getElementById('badgeImage').value = '';
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