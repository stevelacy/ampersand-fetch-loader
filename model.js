var ampersandModel = require('ampersand-model');


var Model =  ampersandModel.extend({
  url: 'http://echo.jsontest.com/content/data/name/first'
  props: {
    content: 'string',
    name: 'string'
  }
});


model = new Model();

model.fetch()
