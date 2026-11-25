// var a:number=20; //Global Variable
// console.log(a);

// let b:number=30; //Global Variable
// console.log(b);

// const c:number=40; //Global Variable
// console.log(c);

var a:number=20; //Declaration and Initialization
console.log(a);
var a:number=30; //Re-Declaration and Re-Initialization
console.log(a);
var a:number=40; //Re-Declaration and Re-Initialization
console.log(a);

console.log("===============");

let b:number; //Declaration 
b=10; //Initialization
console.log(b);
//let b:number; 
b=30; //Re-Initialization
console.log(b);
b=40; //Re-Initialization
console.log(b);

console.log("===============");
const c:number=50; //Declaration and Initialization
console.log(c);
//const c:number=60; //Re-Initialization is not possible for const variable
c=70; //Re-Initialization is not possible for const variable
//Error: Cannot assign to 'c' because it is a constant.