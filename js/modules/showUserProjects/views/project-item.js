/**
 * Created by amusat on 4/28/2016.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#showProjects-project-item'

        ,events:{
            'click #deleteProject' :'deleteProject'
        }
        ,deleteProject : function(ev){
            debugger;
            if(confirm('Delete Project')){
                this.model.url = window.baseApiPath +'/api/projectGroup/'+  this.options.id ;
                this.model.destroy();
            }
        }
    });
});