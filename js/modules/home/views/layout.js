define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var $ = require('jquery');
    var UserDetailsModel =require('../models/userDetailsModel');
    var UserDetails = require('./userDetails');
    var Project = require('../models/projectCollection');
    module.exports = Marionette.Layout.extend({
        id: 'home-layout',
        template: '#home-layout',
        regions: {
            showUser:"#show-user"
        },
        initialize: function(options){
            var userModel = new UserDetailsModel({
                userId:this.userId
            });
            this.model= new Project();
            this.model.fetch();


        },
        onRender: function () {
            var self = this;
            var projectDetailsModel = new Project();
            projectDetailsModel.fetch().then(function(options){
                var count= projectDetailsModel.length;
                document.getElementById("count-project").innerHTML = count;

            });
            this.model = new UserDetailsModel();
            this.model.fetch().then(function(options) {
                self.showUser.show(new UserDetails({
                    model: new Backbone.Model(options),
                }));
            });
        }
    });

});