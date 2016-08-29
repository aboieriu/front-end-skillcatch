var grunt = require('grunt');
var path = require('path');

var libFileRename = function(dest, src) {
    var srcArr = src.split( '/' );
    var newPath = [];
    newPath.push( srcArr[1] );
    newPath.push( srcArr.pop() );
    newDest = dest + newPath.join( '/' );

    return path.normalize(newDest);
}

module.exports = {
    bootstrap: {
        files: [
        {
            expand: true,
            cwd: 'bower_components/bootstrap/dist',
            src: 'fonts/**',
            dest: 'compiled/css/'
        }
        ]
    },
    deploy: {
        files: [
        {
            expand: true,
            cwd: 'compiled',
            src: '**',
            dest: 'deploy/compiled'
        },
        {
            expand: true,
            cwd: 'api',
            src: '**/*',
            dest: 'deploy/api'
        },
        {
            expand: true,
            src: 'bower_components/require/require.js',
            dest: 'deploy',
        }
        ]
    }
}