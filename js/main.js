import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'FeEmLN5LBx95Ny4OXYo9w4IxHtPkdbpVHNZ5fFPX';
const APP_KEY = 'hYNCJlxRffE46DuT4haqZhOl52ELIDiWfsd9EyTB';

$.ajaxSetup ({

headers: {
  'X-Parse-Application-Id': APP_ID,
  'X-Parse-REST-API-Key': API_KEY


}
});

import MajorleaguebaseballCollection from './majorleaguebaseball.collection';
import TeamsTemplate from './teams.template';

let majorleaguebaseball = new MajorleaguebaseballCollection();

function findMajorleaguebaseball() {

  let $ul = $('<ul></ul');

  majorleaguebaseball.each(function(teams) {


  
    let data = teams.toJSON();
    let $li = $(TeamsTemplate(data) );
    $ul.append($ul);  

});
  $('body').html($ul);

}

majorleaguebaseball.fetch().then(findMajorleaguebaseball);

window.majorleaguebaseball = majorleaguebaseball;
window.findMajorleaguebaseball = findMajorleaguebaseball;





console.log('Hello, World');


