module.exports = {
    build: ["compiled"],
    build_after: ["compiled/templates/templates_html.js", "compiled/templates/templates_jade.js", "compiled/main.css"],
    deploy: ["deploy"]
}