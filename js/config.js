require.config({
    paths: {
        /* Bower Libraries */
        jquery: '../bower_components/jquery/jquery.min',
        underscore: '../bower_components/underscore/underscore-min',
        backbone: '../bower_components/backbone/backbone',
        backgrid: '../bower_components/backgrid/lib/backgrid',
        'backgrid-paginator': '../bower_components/backgrid-paginator/backgrid-paginator.min',
        'backgrid-filter': '../bower_components/backgrid-filter/backgrid-filter.min',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette.min',
        'backbone-pageable': '../bower_components/backbone-pageable/lib/backbone-pageable.min',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        moment: '../bower_components/moment/min/moment-with-langs.min',
        /* Custom */
        backbone_marionette_renderer_render: 'custom/backbone.marionette/Renderer.render',
        backbone_marionette_serializeData: 'custom/backbone.marionette/serializeData',
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        backgrid: {
            deps: ['backbone'],
            exports: 'Backgrid'
        },
        'backgrid-paginator': {
            deps: ['backgrid']
        },
        'backgrid-filter': {
            deps: ['backgrid']
        },
        bootstrap: {
            deps: ['jquery']
        },
        backbone_marionette_renderer_render: {
            deps: ['marionette']
        },
        backbone_marionette_serializeData: {
            deps: ['marionette']
        },
        app: {
            deps: [
                'marionette',
                'bootstrap',
                'backgrid',
                'backbone-pageable',
                'backbone_marionette_renderer_render',
                'backbone_marionette_serializeData'
            ]
        }
    }
});