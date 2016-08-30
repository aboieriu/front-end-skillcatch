module.exports = {
    compile: {
        options: {
            name: 'main',
            baseUrl: './js',
            mainConfigFile: './js/config.js',
            out: './deploy/js/compiled.js',
            findNestedDependencies: true,
            preserveLicenseComments: false,
            optimize: 'uglify2',
            wrapShim: true
        }
    }
}