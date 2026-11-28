//Student Result:Pass/Fail

let obtainedMarks:number=75;
let passmarks:number=35;

// let result:boolean=obtainedMarks>=35?true:false;  //75>=35
let result:string=obtainedMarks>=passmarks?"Pass":"Fail";  //75>=35
console.log(`Result: ${result}`);