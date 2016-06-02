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
        },
        initialize: function(){
            debugger;
            this.model.get('status')
            if(this.model.get('status')=="1"){
                this.model.set('status',"val")
            }
            if(this.model.get('status')=="2"){
                this.model.set('status',"val2")
            }

        }
        ,deleteProject : function(ev){
            if(confirm('Delete Project')){
                this.model.url = window.baseApiPath +'/api/projectGroup/'+  this.options.id ;
                this.model.destroy();
            }
        }

    });
});