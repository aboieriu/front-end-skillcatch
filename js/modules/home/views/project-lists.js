/**
 * Created by amusat on 4/29/2016.
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Project = require('./project-items');

    module.exports = Marionette.CollectionView.extend({
        itemView: Project,
        itemViewOptions: function(options) {
            return {
                groupId: this.options.groupId,
            };
        },
        initialize: function(){
        },
        onRender: function(){
            var collLength = this.collection.length;
            var modelLenght = this.collection.models.length;
            for(var j=0; j<modelLenght; j++){
                for(var i=0; i<collLength;i++){
                    document.getElementById("project-elements").innerHTML = this.collection.models[i].attributes[j].name;
                }
            }




        }
    });


});