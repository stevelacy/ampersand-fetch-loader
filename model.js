var ampersandModel = require('ampersand-model');


var Model =  ampersandModel.extend({
  url: 'http://echo.jsontest.com/content/data/name/first',
  props: {
    content: 'string',
    name: 'string'
  }
});

$el = document.getElementById('content');

model = new Model();
model.fetch({
  success: function(data){
    $el.innerHTML = data._values.name;
  },
  error: function(data) {
    $el.innerHTML = 'error';
  }
});



model.on('sync', function(data){
  node = document.createElement('div');
  innerNode = document.createTextNode(data._values.name);
  node.appendChild(innerNode);
  $el.appendChild(node);
});

setInterval(function(){
  model.fetch();
},2000);