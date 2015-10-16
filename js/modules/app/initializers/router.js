define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');

    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
            });
        }
    });

    module.exports = new RouterInitializer();
});
