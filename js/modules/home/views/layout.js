define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var $ = require('jquery');
    var Project = require('modules/showProjects/models/project');
    var UserDetailsModel =require('../models/userDetailsModel');
    var UserDetails = require('./userDetails');
    module.exports = Marionette.Layout.extend({
        id: 'home',
        template: '#home-layout',
        regions: {
            showUser:"#show-user"
        },
        initialize: function(options){
            var userModel = new UserDetailsModel({
                userId:this.userId
            });

        },
        onRender: function () {
            var self = this;
            var projectModel = new Project();
            this.model = new UserDetailsModel();
            this.model.fetch().then(function(options) {
                self.showUser.show(new UserDetails({
                    model: new Backbone.Model(options),
                }));
            });
            projectModel.fetch().then(function(){
        document.getElementById("count-project").innerHTML = projectModel.length;
    });
}
    });

});