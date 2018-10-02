"use strict"

// function greet($greeting = 'hello'){
//   console.log($greeting);
// }
//
// greet();


let args = [1,2,3];
let args2 = [4,5,6];

function test(){
  console.log(args + ',' + args2);
}

// test.apply(null, args);
test(...args, args2);
