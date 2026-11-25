
// let globalVar:number=100; //Global Variable

// var globalVar:number=100;
/*
const globalVar:number=100;

function display() //Function Scope
{
    
    console.log(globalVar); //Functional Level
}

if(true)  //Block Scope
{
    console.log(globalVar); //Block Level
}
display();

console.log(globalVar);  //Global Level  
*/

function display() //Function Scope
{
    // var funVar:number=100;
    // console.log(funVar); //Functional Level
    
    // var funVar:number=100;
    // console.log(funVar); //Functional Level

    // let  funVar:number=100;
    // const  funVar:number=100;
    // var  funVar:number=100;

if(true)  //Block Scope
{
    // var funVar:number=100;
    // console.log(funVar); //Block Level
//   let  funVar:number=100;
//   funVar=100;

// const  funVar:number=100;
// funVar=100;

}

}
//console.log(funVar); //Global Level  



if(true)  //Block Scope
{

var a:number=100;
let b:number=200;
const c:number=300;

let b:number=200;
b=200;
// c=300;
console.log(a); //Block Level
console.log(b); //Block Level
console.log(c); //Block Level
}

console.log(a);
console.log(b); 
console.log(c); 