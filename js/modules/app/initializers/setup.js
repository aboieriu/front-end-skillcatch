define(function (require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');

    app.addInitializer(function () {
        $.ajaxSetup({
            xhrFields: {
                withCredentials: true
            }
            , crossDomain: true
            , complete: function (response) {
                if (response.status === 401) {
                    Backbone.history.navigate('/login', true);
                } else if (response.status === 403) {
                   Backbone.history.navigate('/login', true);
                }
            }

        });
    });

    app.getAuthToken = function() {
        return window.sessionStorage.authToken;
    }
});