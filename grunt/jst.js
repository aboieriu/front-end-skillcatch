var jade = require('jade');
var path = require('path');

module.exports = {
    compile_jade: {
        options: {
            processName: function( filename ) {
                var filePath = path.normalize( filename );
                var template = path.basename(filePath, '.jade');
                var module = filePath.split(path.sep)[2];

                return '#' + module + '-' + template;
            },
            processContent: function( content ) {
                return jade.render( content ).toString();
            }
        },
        files: {
            'compiled/templates/templates.js': [
                'js/modules/**/templates/*.jade'
            ]
        }
    }
}