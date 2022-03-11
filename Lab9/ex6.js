function checkIt(item,index) {
    console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);

}
function isNonNegInt(q, returnErrors=false) {
    errors = []; // Assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return returnErrors ? errors : (errors.length == 0);
}
var parts_array;
var attributes  =  "Katherine;21;21.5;-20.5" ;
var parts_array = attributes.split(';');
console.log(parts_array.join(`,`));


parts_array.forEeach((item,index) => {console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);});



