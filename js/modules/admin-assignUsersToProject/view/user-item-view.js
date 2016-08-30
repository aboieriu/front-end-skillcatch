define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var User=require('../model/user');



    module.exports = Marionette.ItemView.extend({
        tagName: 'tr'
        , template: '#admin-assignUsersToProject-user-item-view'
        , className: 'clickable'
        , events: {
            'click .assignToProject':'assignToProject'
        },

        assignToProject: function() {
            var UserToAssign=new User(this.model);
            UserToAssign.save().always();
            Backbone.history.location.reload();
            window.location.reload();



        }
    });
});

