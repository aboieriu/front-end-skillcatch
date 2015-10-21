define(function (require, exports, module) {
    var app = require('app');
    var Backbone = require('backbone');

    app.addInitializer(function () {
        $.ajaxSetup({
            complete: function (response) {
                if (response.status === 401) {

                    Backbone.history.navigate('/test/401',true);
                } else if (response.status === 403) {
                    Backbone.history.navigate('/test/403',true);
                }
                alert("succes");

            }
        });
    });
});