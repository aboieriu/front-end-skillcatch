/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#login-form'

        , ui: {
        $usernameInput: '#username-input'
            , $passwordInput: '#password-input'
            , $loginButton: '#login-button'
        }

        , events : {
            'click #login-button':'handleLogin'
        }
        ,

        handleLogin: function(event) {
            event.preventDefault();
            var loginData = {
                username: this.ui.$usernameInput.val()
                , password: this.ui.$passwordInput.val(),
            };


            $.ajax({
                type: "POST",
                url: window.baseApiPath +  "/authenticate/",
                data: JSON.stringify(loginData),
                success: function(data){
                    if (data && data.token) {
                        window.sessionStorage.authToken = data.token;
                        window.sessionStorage.skillCatchData = JSON.stringify({
                            userId:data.userId
                        });
                        Backbone.history.navigate('/home', true);
                    }
                },
                contentType: "application/json;charset=utf-8"
            });
        }
    });
});