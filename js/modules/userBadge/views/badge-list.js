/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Badge = require('./badge-item');

    module.exports = Marionette.CollectionView.extend({
        itemView: Badge,
        initialize: function(){
            this.templateHelpers = this.templateHelpers || {};
        },

        onRender: function(){
            var total = 0;

            var collLength = this.collection.length;

            for(var i=0; i<collLength; i++){
                var badgePoint = this.collection.models[i].get('points')
                total+=badgePoint;
            }
            document.getElementById('badge-list').innerHTML ="<span>"+"Puncte Acumulate: " + total + "<img src='images/rewards.jpg' style='width: 30px; height: 30px'>" +"</span>" ;
        }
    });
});