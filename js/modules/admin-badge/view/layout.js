define(function (require, exports, module) {
    var Marionette = require('marionette');
    var Badge = require('../model/badge');
    var Badges = require('../model/badges');
    var BadgesCollectionView = require('./badge-collection-view');

    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-badge-layout'
        , ui: {
            badges: '.adminBadges-container'
            , name: '.form-name'
            , points: '.form-points'
            , description: '.form-description'
            , image: '.form-image'
        }
        , events: {
            'click .addBadge': 'prepareAddBadge'

        }
        , initialize: function (options) {
            this.adminBadgesCollection = new Badges();
            this.adminBadgesCollection.fetch();
            this.prepareAddBadge.requiredBadges = this.adminBadgesCollection;

        }
        , onRender: function () {
            this.ui.badges.append(new BadgesCollectionView({collection: this.adminBadgesCollection}).render().$el);
        },
        prepareAddBadge: function () {
            var that = this.adminBadgesCollection;
            $(document).ready(function () {
                $('#badgeImageUploadForm').on('submit', (function (e) {
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
                            this.addBadge(uploadedBadgePicture);
                        },
                        addBadge: function (uploadedBadgePicture) {
                            var self = this;
                            var badgeData = {
                                name: $('#badgeName').val()
                                , points: $('#badgePoints').val()
                                , description: $('#badgeDescription').val()
                                , image: uploadedBadgePicture
                                , gained: false

                            };
                            var newBadge = new Badge(badgeData);
                            newBadge.save().always(function () {
                                self.clearFields();
                                that.fetch()

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