define(function(require, exports, module) {
    var app = require('app');
    var Marionette = require('marionette');
    var UsersLayout = require('../../admin-user/view/layout');
    var ProjectsLayout = require('../../admin-project/view/layout');

    module.exports = Marionette.Layout.extend({
        id: 'home-layout',
        template: '#home-layout-admin',
        regions: {
            users:"#users"
            , projects: '#projects'
        },
        onRender: function () {
            this.users.show(new UsersLayout());
            this.projects.show(new ProjectsLayout());
        }
    });
});