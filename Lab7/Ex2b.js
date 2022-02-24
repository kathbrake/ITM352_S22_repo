require("./products_data.js"); 

var num_products = 5;

var product_index = 0;

while(product_index++ < num_products)
{
if((product_index >= 0.25*num_products) && (product_index <= 0.75*num_products) )
{
console.log(`${eval('name' + product_index)} is sold out!`);
    continue;
}
console.log(`${product_index}. ${eval('name' + product_index)}` );
    
}
console.log('That\'s all we have');