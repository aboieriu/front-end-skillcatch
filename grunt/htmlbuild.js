module.exports = {
    deploy: {
        src: './index.html',
        dest: './deploy/index.html',
        options: {
            scripts: {
                deployScript: './js/deploy.js'
            }
        }
    }
}