/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Task = require('./badge');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul',
        className:'show-list-badges',
        itemView: Task,
        initialize:function(){

        },
        itemViewOptions: function(options) {
            return {
                taskId: this.options.taskId,
            };
        },
        onRender: function(){
            var total = 0;

            var collLength = this.collection.length;

            for(var i=0; i<collLength; i++){
                var badgePoint = this.collection.models[i].get('points')
                total+=badgePoint;
            }
            document.getElementById('badge-list').innerHTML ="<h3 id='rewards'>"+"Puncte Acumulate: " + total + "<img src='images/rewards.jpg' style='width: 30px; height: 30px'>" +"</h3>" ;
        }
    });

});