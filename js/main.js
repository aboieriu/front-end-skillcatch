define(function(require, exports, module) {
    var app = require('app');
    var appConfig = require('modules/app/main');
    var setup = require('modules/app/initializers/setup');

    app.on("initialize:after", function(options){
        Backbone.history.start();
    });

    app.start();
}
);