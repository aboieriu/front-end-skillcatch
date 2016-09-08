/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var app = require('app');
    var Marionette = require('marionette');
    var Backbone = require('backbone');

    module.exports = Backbone.Marionette.ItemView.extend({
        template: '#login-form'

        , ui: {
        $usernameInput: '#username-input'
            , $passwordInput: '#password-input'
            , $loginButton: '#login-button'
        }

        , events : {
            'click #login-button': 'handleLogin',
            'keypress #password-input':'keyAction',
            "keypress #username-input" : "keyAction"
        },
        keyAction: function (event) {
            if(event.which === 13){
                this.handleLogin();
            }

        }
        ,
        handleLogin: function(event) {
            var loginData = {
                username: this.ui.$usernameInput.val()
                , password: this.ui.$passwordInput.val()
            };

            $.ajax({
                type: "POST",
                url: window.baseApiPath +  "/authenticate/",
                data: JSON.stringify(loginData),
                success: function(data){
                    app.init = app.master.fetch();
                    app.init.then(function(loggedUser){
                        Backbone.history.navigate('/home', true);
                    })
                },
                complete: function (response) {
                    if (response.status === 401) {

                        document.getElementById("showError").style.display = "block";
                        document.getElementById("showError").style.color = "red";

                    }
                },
                contentType: "application/json;charset=utf-8"
            });
        }
    });
});