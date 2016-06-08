define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var $ = require('jquery');
    var Badges = require('./badge-list');
    var Badge = require('../models/badgeCollection');
    module.exports = Marionette.Layout.extend({
        template: '#userBadge-layout',
        regions: {
            showBadges:'#userBadges'
        },
        initialize: function(options){



        },
        onRender: function () {
            var self = this;
            var taskModel = new Badge();
            taskModel.fetch().then(function(options){
                self.showBadges.show(new Badges({
                    collection: new Backbone.Collection(options)
            }));

            });
        }
    });

});