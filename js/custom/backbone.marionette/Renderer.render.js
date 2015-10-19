define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _ = require('underscore');

    _.extend(Marionette.Renderer, {
      render: function( templateId, data ){
        var template = Marionette.$(templateId).html();
        if (!template || template.length === 0){
          if ( JST[ templateId ] ) {
            return JST[ templateId ](data);
          }
          throwError("Could not find template: '" + templateId + "'", "NoTemplateError");
        }

        return _.template(template, data);
    },
    });
});