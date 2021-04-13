const product = {
    productId: '101',
    name: 'Soap',
    price: '50 INR'
}

console.log(product);

const products = ['Detergent', 'oil', 'Rice', 'Tea powder'];
for (let product of products) {
    console.log("Item is", product);
}

//Map
console.log(products.map(product => 'item : '+product));