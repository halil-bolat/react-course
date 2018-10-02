"use strict"

function *g1(){
  console.log('hello');
  yield 'Yield 1 Ran...';
  console.log('World');
  yield 'Yield 2 Ran...';
  return 'Returned';
}

var g = g1();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);



// for(let val of g){
//   console.log(val);
// }

document.getElementById('myButton').onclick = function(){
  console.log(g.next().value);
}
