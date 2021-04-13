

//Create the object
const person = {
    name : 'Dayanand',
    age : '34',
    desg : 'Software Engineer',
    something : () =>{
        console.log("Hello something function.")
    }
}

//Normal Way
// Pass the object and print the name of an object.
function printName(personData){
    console.log(personData.name);
}

//Pass the object.
printName(person);

//Destructuring Way.
const Destructuring = ({name}) => {
    console.log("After Destructuring:", name)
}

Destructuring(person)

//Another way
const { name, age} = person;
console.log(name, age);

//Destructuring an Array
const hobbies = ['Sports', 'Cooking'];
//const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

//Using spread operator also we can destructure an Array.
const [...hobby] = hobbies;
console.log(...hobby);