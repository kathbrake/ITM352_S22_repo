require("./products_data.js"); 

var num_products = 5;

var product_index = 1;

while(product_index <= num_products)
{
    console.log(`${product_index}. ${eval('name' + product_index)}` );
    product_index++;
}

console.log('That\'s all we have!');

