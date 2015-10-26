import Backbone from 'backbone';
import TeamsModel from './teams.model';


let Majorleaguebaseball = Backbone.Collection.extend({

url:'http://api.parse.com/1/classes/teams',

  model: TeamsModel,

  parse: function(data) {
  return data.results;

}

});

export default MajorleaguebaseballCollection;