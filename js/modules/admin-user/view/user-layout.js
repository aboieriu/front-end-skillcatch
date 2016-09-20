define(function(require, exports, module) {
    var Marionette = require('marionette');
    var User = require('../model/user');
    var UserDetails = require('./user-details');
    var UserTaskPlans=require('./user-taskPlans-layout');
    var AvailableTaskPlans=require('../../admin-assignIndividualTaskPlans/view/layout');
    var RoadMap=require('../../admin-user-roadMap/view/allTaskPlans-layout');



    module.exports = Marionette.Layout.extend({
        className: 'users-layout',
        template: '#admin-user-user-layout'
        , regions: {
             userDetails:'.userDetails'
            ,userTaskPlans:'.userTaskPlans'
            ,availableTaskPlans:'.availableTaskPlans'
            ,userRoadMap:'.userRoadMap'


        }

        , initialize: function(options) {
            this.userModel = new User({id:options.userId});
            this.listenTo(this.userModel,'assignIndividualTaskPlanEvent',this.render)

        }
        , onRender: function() {
            var self = this;
            this.userModel.fetch().then(function(){
                self.userDetails.show(new UserDetails({model: self.userModel}));
                self.userTaskPlans.show(new UserTaskPlans({model: self.userModel}));
                self.availableTaskPlans.show(new AvailableTaskPlans({model:self.userModel}));
                self.userRoadMap.show(new RoadMap({model:self.userModel,id:self.userModel.id}));

            });
        }
    });
});