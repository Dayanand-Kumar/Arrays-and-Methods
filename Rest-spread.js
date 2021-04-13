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

//rest operator
//way 1
const toArray = (...args) =>{
    return args;
}
// way 2
// function toArray(...args){
//     return args;
// }
console.log(toArray(1,2,3,4))



