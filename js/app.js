define(function(require, exports, module) {
   require('backbone-pageable');
   require('backbone_marionette_renderer_render');
   require('backbone_marionette_serializeData');
   require('backgrid');
   require('bootstrap');



   var Backbone = require('backbone');
   var Marionette = require('marionette');
   window.baseApiPath = 'http://localhost:8080/skillcatch';
   module.exports = new Backbone.Marionette.Application();

});