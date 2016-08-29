module.exports = function( grunt ) {

    require('time-grunt')( grunt );

    require('load-grunt-config')( grunt , {
        jitGrunt: {
            htmlbuild: 'grunt-html-build'
        }
    });

};