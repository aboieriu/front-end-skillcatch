var grunt = require('grunt');

module.exports = {
    libs: {
        options: {
            keepSpecialComments: 0
        },
        files: {
            'compiled/css/all/all.min.css': [
                /* Bower Components ( Libraries ) */
                'bower_components/bootstrap/dist/css/bootstrap.min.css',
                'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                'bower_components/backgrid/lib/backgrid.min.css',
                'bower_components/backgrid-paginator/backgrid-paginator.min.css',
                'bower_components/backgrid-filter/backgrid-filter.min.css',
                /* Custom CSS */
                'compiled/css/main.css',
                'css/override/*.css'
            ]
        }
    }
}