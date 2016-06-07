define(function (require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');

    app.addInitializer(function () {
        $.ajaxSetup({
            beforeSend: function(xhr, setttings){
                xhr.setRequestHeader('X-Auth-Token', app.getAuthToken());
            }
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