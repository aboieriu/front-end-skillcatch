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
        initialize: function() {

        },
        onRender: function () {
        },
        logout: function(){
            if(window.sessionStorage.authToken){
                window.sessionStorage.removeItem('authToken');
                Backbone.history.navigate('/#login', true)
            }
        }
    });
});