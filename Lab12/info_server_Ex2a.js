var express = require('express');
var app = express();

//respond to all requests for all paths
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});

app.get('/test', function (request, response, next) {
    response.send(' in test: ' + request.method + ' to path ' + request.path);
});


app.use(express.static(__dirname + '/public'));

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback
