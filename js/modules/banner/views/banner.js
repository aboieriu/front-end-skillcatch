define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _ = require('underscore');
    var eventBus = Backbone.Events;


    module.exports = Marionette.ItemView.extend({
        template: '#banner-banner',
       // className: 'banner col-md-12',
        events:{
            'click #logout' :'logout'
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

        }
    });
});