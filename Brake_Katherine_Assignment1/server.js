var products_array = require(__dirname + '/products_data.js');

var express = require('express');
var app = express();


app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});


app.use(express.static(__dirname + '/public'));


app.listen(8080, () => console.log(`listening on port 8080`));
