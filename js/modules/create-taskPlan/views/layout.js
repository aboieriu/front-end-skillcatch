
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateCommentModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'create-taskPlan',
        template: '#create-taskPlan-layout',

        events: {
            'click #saveButton': 'saveNewTaskPlan'
        },
        initialize: function (options) {

            this.model = new CreateCommentModel();

            this.model.id = options.id;
        },

        saveNewTaskPlan: function () {

            var taskPlanName = $('#taskPlanName').val();
            var taskPlanDescription = $('#taskPlanDescription').val();



            this.model.url = window.baseApiPath + '/api/projectGroup/' +  this.id + '/taskPlan';

            this.model.set('name', taskPlanName);
            this.model.set('description', taskPlanDescription);
            var self = this;

            this.model.save().always(function(){
                Backbone.history.navigate('#show-projects', true);
            });

        }
    });
})
;

