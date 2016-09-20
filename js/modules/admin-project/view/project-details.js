define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#admin-project-project-details-view'
        , ui: {
            projectName: '#projectName'
            , projectDescription: '#projectDescription'
        }
        , events: {
            'click #projectEditBtn':'editProject'
        },
        initialize:function (options) {
            this.targetProjectModel=options.model;
            this.listenTo(this.targetProjectModel, 'sync', this.render);
        },

        editProject:function () {
            var self = this;
            var projectData = {
                name: this.ui.projectName.val()
                , descriptions: this.ui.projectDescription.val()
            };

            this.targetProjectModel.set(projectData);
            this.targetProjectModel.save().always(function () {
                self.targetProjectModel.fetch();
            })
        }
    });
});