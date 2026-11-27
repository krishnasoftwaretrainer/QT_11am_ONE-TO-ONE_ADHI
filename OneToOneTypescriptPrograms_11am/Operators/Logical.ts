let input1:boolean=true;
    input1=false;
let input2:boolean=true;
input2=false;

console.log(input1 && input2); //true false false false
console.log(input1 || input2); //true true true false

console.log(!input1 );         //false  false true true
console.log(!(input1 && input2)); //false true true true
console.log(!(input1 || input2)); //false false false true