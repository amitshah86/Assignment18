import Backbone from 'backbone';

let TeamsModel = Backbone.Model.extend({

url:'http://api.parse.com/1/classes/teams',


    idAttribute: 'objectId'

});


export default TeamsModel;