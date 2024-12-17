//Q.1 Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function variableScoping(){

    var a=2;
    if(1){
        var a=3;
        let b=4;
        const c=5;
    }
    console.log(a);
    // Output: 2
    console.log(b);
    // Output: ReferenceError: b is not defined
    console.log(c);
    // Output: ReferenceError: c is not defined
}
variableScoping();

// var is function-scoped, meaning it can be accessed inside the function even if declared inside a block.
// let and const are block-scoped, so they are only accessible within the block (inside the if statement in this case).
// const also cannot be reassigned, unlike let.









//Q2. Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

const arr=['apple','mango','orange','banana','grapes'];
function SecondFruit(){
    return arr[1]; 
}
console.log(SecondFruit());
// Output: mango








//Q.3 Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

const arr1=['apple','mango','orange','banana','grapes'];
function modifyarray(arr){
    arr.push("Pineapple");
    arr.pop();
}
modifyarray(arr1);
console.log(arr1);
//Output: ['apple', 'mango', 'orange', 'banana', 'grapes']







//Q.4 Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const nums=[1,2,3,4,5,6];
function Squared(){
 return   nums.map((num)=>Math.pow(num,2))
}
console.log(Squared());






//Q.5 Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

const nums1=[1,2,3,4,5,6,7,8];
function odd(){
    return nums1.filter((num)=>num%2!==0);
}
console.log(odd());







//Q.6 Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

const person={
    name:'Vipul Patel',
    age:22,
    occupation:'Frontend Developer'
}
function greet(person){
    return (`Hello my name is ${person.name}. I am ${person.age} years old and I work as a  ${person.occupation}`)
}
console.log(greet(person));











//Q.7 Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

const dimensions={
    width:19,
    height:45
}
function area(dimensions){
    const area=dimensions.width*dimensions.height;
    return `Area=${area}`
}
console.log(area(dimensions));








//Q.8 Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

const randomobject={
    name:'Vipul',
    age:22,
    occupation:'Frontend Developer',
    hobbies:['reading','coding','gaming'],
    address:'Mumbai'

}
function getkeys(randomobject){
    return Object.keys(randomobject);
}
console.log(getkeys(randomobject));










//Q.9 Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.


const obj1={
    name:'Vipul',
    age:22,
}
const obj2={
    occupation:'Frontend Developer',
    'address':'Mumbai',
}
function mergeobj(){
    const obj={};
    return Object.assign(obj,obj1,obj2);
}
console.log(mergeobj());











//Q.10 Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

const numbers=[1,3,56,6,24];
function sumofallnums(numarr){
    return numarr.reduce((sum,num)=>sum+num,0);
}
console.log(sumofallnums(numbers));