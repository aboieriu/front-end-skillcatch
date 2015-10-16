/**
    node server.js
*/
var ARGS = {};

process.argv.forEach(function (val, index, array) {
    var arg = val.split('=');
    ARGS[ arg[0] ] = arg[1] || true;
});

if( ARGS['--help'] ) {
    console.log( '' +
        'Demo Application\n' +
        '\n' +
        'Usage\n' +
        '  node server.js [options]\n' +
        '\n' +
        'Options\n' +
        '    --help                     Displays this help text.\n' +
        '    --dev                      Run the web application in dev env. ( default is production )\n' +
        '    --port=PORT                Sets PORT for the webapp. ( default = 81 )\n' +
        '\n'
    );
    return;
}

var WWW_DIR = ( ARGS['--dev'] ) ? './' : './deploy';
var SERVER_PORT = ( ARGS['--port'] ) ? ARGS['--port'] : 81;

var static = require('node-static');
var file = new static.Server( WWW_DIR );

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen( SERVER_PORT );

console.info( ((ARGS['--dev'])? 'DEV' : '') + ' Server is up on port ' + SERVER_PORT )