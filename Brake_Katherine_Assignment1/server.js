var products_array = require(__dirname + '/public/products_data.js');
var express = require('express');
var app = express();


app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});


// process purchase request (validate quantities, check quantity available)
function isNonNegInt(q, return_errors=false) {
   errors  = []; // no errors assumption
   if (q == '') q=0; //
   if (Number(q) != q) errors.push('<font color="red">Not a number!</font>'); // Check if string is a number value
   if (q < 0) errors.push('<font color="red">Negative value!</font>'); // Check if it is non-negative
   if (parseInt(q) != q) errors.push('<font color="red">Not an integer!</font>'); // Check that it is an integer
   return return_errors ? errors : (errors.length == 0);
}


app.use(express.static(__dirname + '/public'));


// starting server
app.listen(8080, () => console.log(`listening on port 8080`));

//family friend Anatol Blass helped me with this

app.listen(8080, () => console.log(`listening on port 8080`));

