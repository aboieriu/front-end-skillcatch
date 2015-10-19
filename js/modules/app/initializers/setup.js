define(function (require, exports, module) {
    var app = require('app');

    app.addInitializer(function () {
        $.ajaxSetup({
            complete: function (response) {
                if (response.statusCode === 401) {
                    alert('status 401');
                } else if (response.statusCode === 403) {
                    alert('status 403');
                }
                alert("succes");

            }
        });
    });
});