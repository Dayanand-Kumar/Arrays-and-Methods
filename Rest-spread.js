//splice
const products = ['Detergent', 'oil', 'Rice', 'Tea powder'];
//Way to copy the array.
const copiedArray = products.slice();
console.log(copiedArray);

//way to copy an array using spread operator for Arrays.
const spreadArray = [...products];
console.log(spreadArray);

//way to copy an array using spread operator for Arrays.
const product = {
    productId: '101',
    name: 'Soap',
    price: '50 INR'
}
console.log('Before Copy : ',product)
const copiedProduct = {...product}
console.log('After Copy  : ', copiedProduct);



