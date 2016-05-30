/**
 * Created by amusat on 5/30/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var UserDetails = require('./user-details');
    var UserModel = require('../models/model');

    module.exports = Marionette.Layout.extend({
        idName: 'showUser',
        template: '#showUser-layout',

        regions: {
            showUser: "#show-user",
        },
        initialize: function (options) {
            this.userId = options.userId;
            this.groupId= options.groupId;
        },
        onRender: function () {
            var self = this;
            var userModel = new UserModel({
                userId:this.userId,
                groupId:this.groupId
            });
            userModel.fetch().then(function(options) {
                self.showUser.show(new UserDetails({
                    model: new Backbone.Model(options)
                }));
            });

        }
    });
});
