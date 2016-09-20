define(function(require, exports, module) {
    var Marionette = require('marionette');
    var BadgeCollectionView = require('../../badge/view/user-badges-collection-view');
    var BadgeCollection = require('../../badge/model/UserTaskPlansCollection');
    module.exports = Marionette.ItemView.extend({
        template: '#show-projects-taskplan-task-item-view'
        , ui: {
            badgesContainer: '.badges-container'
            , taskStatusSelect: '.taskStatusSelect'
        }
        , events: {
            'click .taskUpdateButton': 'updateTaskStatus'
        }
        , onRender: function() {
            this.ui.taskStatusSelect.find('option[value="'+this.model.get('status')+'"]').attr('selected', 'selected');
            var badgesCollection = new BadgeCollection(this.model.get('badges'));
            badgesCollection.sort();
            this.ui.badgesContainer.html(new BadgeCollectionView({collection:badgesCollection}).render().$el);
        }
        , updateTaskStatus: function(){
            var self = this;
            var status = this.ui.taskStatusSelect.val();
            this.model.set('status', status);
            this.model.save().always(function(){
                self.model.trigger('task-updated');
            })
        }
    });


});